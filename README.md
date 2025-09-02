# 🤖 AI Chatbox

An interactive real-time chatbox powered by **Google Gemini AI** with **Socket.io** integration.  
This project allows users to chat with an AI assistant in a conversational way, with short-term memory support.

---

## ✨ Features
- 🔌 **Real-time communication** using Socket.io  
- 🧠 **Short-term memory** (AI remembers previous messages in a session)  
- 🎨 Frontend (React + Vite) connected to backend  
- ⚡ Fast responses powered by **Google Gemini AI**  
- 🌐 CORS enabled for local frontend-backend communication  

---

## 📂 Project Structure
AI-Chatbox/
│── backend/ # Node.js + Express server
│ ├── server.js # Socket.io + API routes
│ └── src/
│ ├── app.js
│ └── service/
│ └── ai.service.js # Gemini integration
│
│── frontend/ # React + Vite frontend
│ └── src/
│ ├── App.jsx
│ └── components/
│
│── .env # Environment variables
│── package.json
│── README.md
