const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http, { cors: true, withCredentials: true });
const port = process.env.PORT || 3001;
const mongoose = require("mongoose");
const session = require("cookie-session");
const cors = require("cors");
const passport = require("passport");
const path = require("path");
require("./passport.js");

mongoose.set("useFindAndModify", false);
mongoose.connect(
  "mongodb+srv://admin2:JmHTrp09LkkiAIMm@cluster0.ktmcd.mongodb.net/WatchTogether?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DB CONNECTED");
});

app.use(express.static("build"));

app.use(cors(true));
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});
app.get("/getProfile", (req, res) => {
  if (req.session.passport) {
    res.json({ profile: req.session.passport.user });
  } else {
    res.json({ profile: null });
  }
});
app.get("/:channel", (req, res) => {
  const { channel } = req.params;
  res.redirect(`/#/${channel}`);
});
app.use(function (req, res) {
  res.redirect("/");
});

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get("/auth/twitch", passport.authenticate("twitch"));
app.get(
  "/auth/twitch/callback",
  passport.authenticate("twitch", { failureRedirect: "/" }),
  function (req, res) {
    const username = req.session?.passport?.user?.login;
    // Successful authentication, redirect home.
    if (username) {
      res.redirect(`/#/${username}`);
    } else {
      res.redirect(`/#/`);
    }
  }
);

app.get("/twitch/logout", function (req, res) {
  req.session = null;
  req.logout();
  res.redirect("/");
});

const RoomSchema = require("./Schemas/RoomSchema");

// ON START APP RESTART ALL ADMINS
RoomSchema.updateMany({}, { admin: null, onlineUsers: 0 }, (err, docs) => {
  if (err) return console.log(`CLEAR ALL ADMINS ON START ERROR : ${err}`);

  console.log("CLEARED ALL ADMINS");
});

io.on("connection", (client) => {
  let isAdminInRoom = "";

  client.on("joinRoom", ({ currentRoom }) => {
    client.join(currentRoom);
    const onlineUsersInRoom = io.sockets.adapter.rooms.get(currentRoom).size;
    // console.log(`CLIENT JOINED TO ${currentRoom}`);
    RoomSchema.findOneAndUpdate(
      { name: currentRoom },
      { onlineUsers: onlineUsersInRoom },
      { new: true },
      (err, docs) => {
        if (err) {
          return console.log(`CHECK IS ROOM EXIST ERROR ${err}`);
        }
        // IF THERE IS NO ROOM CREATE
        if (!docs) {
          const newRoom = new RoomSchema({
            name: currentRoom,
            onlineUsers: 1,
          });
          newRoom.save((err, docs) => {
            if (err) return console.log(`SAVE NEW ROOM ERROR ${err}`);
            client.emit("joinRoomAnswer", { docs });
          });
        } else {
          // IF EXIST JUST SEND DATA
          client.emit("joinRoomAnswer", { docs });
          const onlineUsers = docs.onlineUsers;
          io.to(currentRoom).emit("onlineUsersAnswer", { onlineUsers });
        }
      }
    );
  });

  client.on("leaveRoom", ({ currentRoom }) => {
    let onlineUsersAfterLeft;
    let onlineUsersInRoom;
    if (io.sockets.adapter.rooms.get(currentRoom)) {
      onlineUsersInRoom = io.sockets.adapter.rooms.get(currentRoom).size;
      onlineUsersAfterLeft = onlineUsersInRoom - 1;
    } else {
      onlineUsersAfterLeft = 1;
    }
    RoomSchema.findOneAndUpdate(
      { name: currentRoom },
      { onlineUsers: onlineUsersAfterLeft },
      { new: true },
      (err, docs) => {
        if (err) {
          return console.log(`LEAVE ROOM DECREMNT USERS ONLINE:  ${err}`);
        }
        const onlineUsers = docs.onlineUsers || 1;
        io.to(currentRoom).emit("onlineUsersAnswer", { onlineUsers });
      }
    );
    client.leave(currentRoom);
    if (isAdminInRoom) {
      RoomSchema.findOneAndUpdate(
        { name: isAdminInRoom },
        { admin: null },
        (err) => {
          if (err) return console.log(`ADMIN LEFT ERROR ${err}`);
          console.log(`Admin deleted in ${isAdminInRoom} (leaveRoom)`);
          io.in(currentRoom).emit("adminAnswer", {
            isAdminTaken: false,
          });
        }
      );
      isAdminInRoom = "";
    }
  });

  client.on("adminData", ({ currentSeconds, currentRoom, videoQueue }) => {
    io.to(currentRoom).emit("adminDataAnswer", {
      currentSeconds,
      videoQueue,
    });
  });

  client.on("videoChange", ({ currentVideoLink, currentRoom }) => {
    const date = Date.now();

    RoomSchema.findOneAndUpdate(
      { name: currentRoom },
      { currentVideoLink, createdAt: date },
      (err, docs) => {
        if (err) {
          return console.log(`ADMIN DATA ERROR: ${err}`);
        }
      }
    );
    io.to(currentRoom).emit("videoChangeAnswer", {
      currentVideoLink,
      currentRoom,
    });
  });

  client.on("isPlaying", ({ isPlaying, currentRoom }) => {
    io.to(currentRoom).emit("isPlayingSocketAnswer", {
      isPlaying,
    });
    isPlayingServer = isPlaying;
  });

  client.on("adminFromTwitchJoined", ({ currentRoom }) => {});

  client.on("adminRequest", ({ currentRoom }) => {
    RoomSchema.findOne({ name: currentRoom }, (err, docs) => {
      if (err) return console.log(`ADMIN REQUEST ERROR :${err}`);

      if (docs.admin) {
        client.emit("adminRequestAnswer", {
          success: false,
          message: "There is already an admin",
        });
      } else {
        RoomSchema.findOneAndUpdate(
          { name: currentRoom },
          { admin: client.id },
          { new: true },
          (err, docs) => {
            if (err)
              return console.log(`ADMIN REQUEST UPDATE ADMIN ERROR :${err}`);
            client.emit("adminRequestAnswer", {
              success: true,
              message: "Now you are an admin",
            });
            io.in(currentRoom).emit("adminAnswer", {
              isAdminTaken: true,
            });

            isAdminInRoom = currentRoom;
          }
        );
      }
    });
  });

  client.on("adminQueueUpdate", ({ videoQueue, currentRoom }) => {
    console.log(videoQueue, currentRoom);
    io.in(currentRoom).emit("adminQueueUpdateAnswer", { videoQueue });
  });
  client.on("adminLeave", () => {
    if (isAdminInRoom) {
      RoomSchema.findOneAndUpdate(
        { name: isAdminInRoom },
        { admin: null },
        (err) => {
          if (err) return console.log(`ADMIN LEFT ERROR ${err}`);

          console.log(
            `Admin deleted in ${isAdminInRoom} (adminLeave unloadEvent)`
          );
        }
      );
      if (isAdminInRoom) {
        console.log(isAdminInRoom);
        io.in(isAdminInRoom).emit("adminAnswer", { isAdminTaken: false });
        isAdminInRoom = "";
      }
    }
  });

  client.on("disconnect", () => {
    if (isAdminInRoom) {
      RoomSchema.findOneAndUpdate(
        { name: isAdminInRoom },
        { admin: null },
        (err) => {
          if (err) return console.log(`ADMIN LEFT ERROR ${err}`);

          console.log(`Admin deleted in ${isAdminInRoom} (disconnect)`);
          io.in(isAdminInRoom).emit("adminAnswer", {
            isAdminTaken: false,
          });
        }
      );
    }
  });
});

http.listen(port, () => {
  console.log(`listening on *:${port}`);
});
