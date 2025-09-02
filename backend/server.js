require('dotenv').config();
const app = require('./src/app');
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResponse = require('./src/service/ai.service');

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: { origin: "http://localhost:5173" }
});
 
  chatHistory = [];


io.on("connection", (socket) => {
  console.log(" User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log(" User disconnected:", socket.id);
  })

  socket.on('ai-message', async (data) => {
    console.log("AI message received:", data);
    chatHistory.push({
      role: "user",
      parts: [{text: data}]
    });

    const response = await generateResponse(data);

    chatHistory.push({
      role: "model",
      parts: [{text: response}]
    });

    console.log(" AI response generated:", response);
    socket.emit('ai-response', response);
  });

 
});


httpServer.listen(3000, () => {
  console.log(' Server is running on port 3000');
})
