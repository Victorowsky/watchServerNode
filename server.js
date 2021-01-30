const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, { cors: true });
const port = process.env.PORT || 3001;

let currentVideoLinkServer;
let isPlayingServer;
let videoQueueServer = [];
io.on("connection", (client) => {
  client.on("handleLogin", ({ password }) => {
    if (password === `,./`) {
      client.emit("handleLoginAnswer", { success: true });
    }
  });

  client.on("currentSeconds", (seconds) => {
    currentVideoTime = seconds;
    io.emit("currentSecondsAnswer", seconds);
  });
  client.on("videoQueue", (videoQueue) => {
    videoQueueServer.push(videoQueue);
    io.emit("videoQueueAnswer", { videoQueueServer });
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
      videoQueueServer,
    });
  });
});

http.listen(port, () => {
  console.log(`listening on *:${port}`);
});
