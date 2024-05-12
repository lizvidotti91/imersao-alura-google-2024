// node --version # Should be >= 18
// npm install @google/generative-ai

import { GOOGLE_API_KEY } from "./config";

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = GOOGLE_API_KEY;

async function runChat() {
  let textInput = document.querySelector('#input').value;
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 2,
    topK: 0,
    topP: 0.95,
    maxOutputTokens: 8192,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "Analyze the sentiment of the following Tweets and classify them as POSITIVE, NEGATIVE, or NEUTRAL. \"It's so beautiful today!\""}],
      },
      {
        role: "model",
        parts: [{ text: "POSITIVE"}],
      },
      {
        role: "user",
        parts: [{ text: "\"It's so cold today I can't feel my feet...\""}],
      },
      {
        role: "model",
        parts: [{ text: "NEGATIVE"}],
      },
      {
        role: "user",
        parts: [{ text: "\"The weather today is perfectly adequate.\""}],
      },
      {
        role: "model",
        parts: [{ text: "NEUTRAL"}],
      },
    ],
  });

  const result = await chat.sendMessage(textInput);
  const response = result.response;
  console.log(response.text());
}

// runChat();
