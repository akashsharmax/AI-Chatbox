require('dotenv').config();
const app = require('./src/app');
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResponse = require("./src/service/ai.service");


const httpServer = createServer(app);


const io = new Server(httpServer, {
    cors: {
        origin: "*", 
        methods: ["GET", "POST"]
    }
});


const chatHistory = [];


io.on("connection", (socket) => {
    console.log(" A user connected:", socket.id);

    socket.on("disconnect", () => {
        console.log(" A user disconnected:", socket.id);
    });

    socket.on("ai-message", async (data) => {
        console.log(" Ai message received:", data);

        chatHistory.push({
            role: "user",
            parts: [{ text: data }]
        });

        try {
            const mama = await generateResponse(chatHistory);

            chatHistory.push({
                role: "model",
                parts: [{ text: mama }]
            });

            
            socket.emit("ai-message-response", mama);

        } catch (err) {
            console.error(" Error generating AI response:", err);
            socket.emit("ai-message-response", "Sorry, something went wrong.");
        }
    });
});


const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`);
});
