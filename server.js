const server = require("http").createServer();
// const io = require('socket.io')(server)
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
// port
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`server running at ${PORT}...`);
});

let readyPlayerCount = 0;
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("ready", () => {
    console.log("player ready", socket.id);

    readyPlayerCount++;

    if (readyPlayerCount === 2) {
      io.emit("startGame", socket.id);
    }
  });
});
