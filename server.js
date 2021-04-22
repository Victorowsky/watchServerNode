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

app.get("*", (req, res) => {
	res.redirect("/");
});

const RoomSchema = require("./Schemas/RoomSchema");

// ON START APP RESTART ALL ADMINS
RoomSchema.updateMany({}, { admin: null }, (err, docs) => {
	if (err) return console.log(`CLEAR ALL ADMINS ON START ERROR : ${err}`);

	console.log("CLEARED ALL ADMINS");
});

io.on("connection", (client) => {
	let currentRoomSocket = null;

	client.on("joinRoom", ({ currentRoom }) => {
		RoomSchema.findOrCreate({ name: currentRoom }, (err, docs) => {
			if (err) return console.log(`CREATE ROOM ERROR -> ${err}`);
			client.emit("joinRoomAnswer", { docs });
		});
		client.join(currentRoom);
		let onlineUsers = io.sockets.adapter.rooms.get(currentRoom) || 1;
		onlineUsers = onlineUsers.size;
		io.to(currentRoom).emit("onlineUsersAnswer", { onlineUsers });
	});

	client.on("leaveRoom", ({ currentRoom }) => {
		client.leave(currentRoom);
		let onlineUsers = io.sockets.adapter.rooms.get(currentRoom) || 1;
		onlineUsers = onlineUsers.size;
		io.to(currentRoom).emit("onlineUsersAnswer", { onlineUsers });
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
	});

	client.on("adminQueueUpdate", ({ videoQueue, currentRoom }) => {
		io.in(currentRoom).emit("adminQueueUpdateAnswer", { videoQueue });
	});

	client.on("disconnect", () => {
		if (currentRoomSocket) {
			let onlineUsers = io.sockets.adapter.rooms.get(currentRoomSocket);
			if (onlineUsers) {
				onlineUsers = onlineUsers.size;
				io.to(currentRoomSocket).emit("onlineUsersAnswer", { onlineUsers });
			}
		}
	});
});

http.listen(port, () => {
	console.log(`listening on *:${port}`);
});
