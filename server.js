const app = require('./src/app');
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);

io.on("connection", (socket) => {
  // ...
});


httpserver.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 