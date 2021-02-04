const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, { cors: true });
const port = process.env.PORT || 3001;

let currentVideoLinkServer;
let isPlayingServer;
let onlineUsers = 0;
let currentAdmin = null;
let twitchStreamerChatServer = "victorowsky_";

io.on("connection", (client) => {
  io.emit("onlineUsers", ++onlineUsers);
  client.on("handleLogin", ({ password }) => {
    if (password === `,./`) {
      if (currentAdmin === null) {
        client.emit("handleLoginAnswer", { success: true });
        currentAdmin = client.id;
      } else {
        client.emit("handleLoginAnswer", {
          success: false,
          message: "There is already admin",
        });
      }
    }
  });

  client.on("adminData", ({ currentSeconds }) => {
    io.emit("adminDataAnswer", { currentSeconds });
  });

  client.on("videoChange", (currentVideoLink) => {
    currentVideoLinkServer = currentVideoLink;
    io.emit("videoChangeAnswer", currentVideoLink);
  });

  client.on("isPlaying", ({ isPlaying }) => {
    io.emit("isPlayingSocketAnswer", isPlaying);
    isPlayingServer = isPlaying;
  });
  client.on("getAllData", () => {
    client.emit("getAllDataAnswer", {
      currentVideoLinkServer,
      isPlayingServer,
      twitchStreamerChatServer,
    });
  });

  client.on("adminLeave", () => {
    currentAdmin = null;
  });

  client.on("changeStreamersChat", (twitchStreamerChat) => {
    twitchStreamerChatServer = twitchStreamerChat;
    io.emit("changeStreamersChatAnswer", twitchStreamerChat);
  });

  client.on("disconnect", () => {
    if (client.id === currentAdmin) {
      currentAdmin = null;
    }
    io.emit("onlineUsers", --onlineUsers);
  });
});

http.listen(port, () => {
  console.log(`listening on *:${port}`);
});
