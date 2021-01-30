const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, { cors: true });
const port = process.env.PORT || 3001;

let currentVideoLinkServer;
let isPlayingServer;
let videoQueueServer = [];
io.on("connection", (client) => {
  client.on("currentSeconds", (seconds) => {
    currentVideoTime = seconds;
    io.emit("currentSecondsAnswer", seconds);
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
    });
  });
});

http.listen(port, () => {
  console.log(`listening on *:${port}`);
});
