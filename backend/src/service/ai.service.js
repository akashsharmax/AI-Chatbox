const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function generateResponse(chatHistory) {
  try {
    const result = await model.generateContent({
      contents: chatHistory
    });

    return result.response.text();
  } catch (err) {
    console.error(" Error in generateResponse:", err);
    return "Something went wrong while generating response.";
  }
}

console.log(" API Key Loaded:", process.env.GEMINI_API_KEY);

module.exports = generateResponse;
