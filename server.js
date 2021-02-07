const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, { cors: true, withCredentials: true });
const port = process.env.PORT || 3001;
// const bodyParser = require("body-parser");
// const passport = require("passport");
const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const makeStore = require("express-session");
// const store = new makeStore.MemoryStore();
// const session = require("express-session")({
//   name: "twitch-session",
//   secret: "my-secret",
//   resave: true,
//   saveUninitialized: true,
//   store: store,
// });
// const sharedsession = require("express-socket.io-session");

require("./passport-config");

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

// app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(session);
// app.use(passport.initialize());
// app.use(passport.session());

// app.get("/twitch", passport.authenticate("twitch"));
// app.get(
//   "/twitch/callback",
//   passport.authenticate("twitch", { failureRedirect: "/failed" }),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     console.log(req.session);
//     // res.json(req.session.passport);
//     res.redirect("http://localhost:3000/");
//   }
// );

// app.get("/failed", (req, res) => {
//   res.send("failed");
// });

// app.get("/good", (req, res) => {
//   res.redirect("http://localhost:3000/");
// });

// app.get("/logout", (req, res) => {
//   // res.clearCookie("userid");
//   req.session = null;
//   req.logout();
//   res.redirect("/");
// });

const RoomSchema = require("./Schemas/RoomSchema");

let onlineUsers = 0;

// ON START APP RESTART ALL ADMINS
RoomSchema.updateMany({}, { admin: null, onlineUsers: 0 }, (err, docs) => {
  if (err) return console.log(`CLEAR ALL ADMINS ON START ERROR : ${err}`);

  console.log("CLEARED ALL ADMINS");
});

io.on("connection", (client) => {
  let isAdminInRoom = "";

  io.emit("onlineUsers", ++onlineUsers);

  client.on("joinRoom", ({ currentRoom }) => {
    client.join(currentRoom);
    // console.log(`CLIENT JOINED TO ${currentRoom}`);
    RoomSchema.findOneAndUpdate(
      { name: currentRoom },
      { $inc: { onlineUsers: 1 } },
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

    // io.to(twitchStreamer).emit("roomData", { usersOnline: "+" });
  });

  client.on("leaveRoom", ({ currentRoom }) => {
    // console.log(`CLIENT LEFT ${currentRoom}`);

    RoomSchema.findOneAndUpdate(
      { name: currentRoom },
      { $inc: { onlineUsers: -1 } },
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

          console.log(`Admin deleted in ${isAdminInRoom}`);
        }
      );
      isAdminInRoom = "";
    }
  });

  client.on("adminData", ({ currentSeconds, currentRoom }) => {
    io.to(currentRoom).emit("adminDataAnswer", {
      currentSeconds,
    });
  });

  client.on("videoChange", ({ currentVideoLink, currentRoom }) => {
    RoomSchema.findOneAndUpdate(
      { name: currentRoom },
      { currentVideoLink },
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

  client.on("adminRequest", ({ currentRoom }) => {
    RoomSchema.findOne({ name: currentRoom }, (err, docs) => {
      if (err) return console.log(`ADMIN REQUEST ERROR :${err}`);

      // console.log(docs);
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
            isAdminInRoom = currentRoom;
          }
        );
      }
    });
  });

  client.on("adminLeave", () => {
    // console.log(isAdminInRoom);
    if (isAdminInRoom) {
      RoomSchema.findOneAndUpdate(
        { name: isAdminInRoom },
        { admin: null },
        (err) => {
          if (err) return console.log(`ADMIN LEFT ERROR ${err}`);

          console.log(`Admin deleted in ${isAdminInRoom}`);
        }
      );
      isAdminInRoom = "";
    }
  });

  client.on("changeStreamersChat", (twitchStreamerChat) => {
    twitchStreamerChatServer = twitchStreamerChat;
    io.emit("changeStreamersChatAnswer", twitchStreamerChat);
  });

  client.on("disconnect", () => {
    if (isAdminInRoom) {
      RoomSchema.findOneAndUpdate(
        { name: isAdminInRoom },
        { admin: null },
        (err) => {
          if (err) return console.log(`ADMIN LEFT ERROR ${err}`);

          console.log(`Admin deleted in ${isAdminInRoom}`);
        }
      );
    }
    // if (client.id === currentAdmin) {
    //   currentAdmin = null;
    // }
    io.emit("onlineUsers", --onlineUsers);
  });
});

http.listen(port, () => {
  console.log(`listening on *:${port}`);
});
