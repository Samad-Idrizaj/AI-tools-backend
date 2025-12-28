import express from "express";
import cors from "cors";
import OpenAI from "openai";

// Server starten
const app = express();

// Erlaubt Zugriff von außen (Frontend)
app.use(cors());

// Erlaubt JSON Daten
app.use(express.json());

// OpenAI vorbereiten
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
app.post("/chat", async (req, res) => {
const completion = await openai.chat.completions.create({
  model: "gpt-4.1-mini",
  messages: [
    { role: "user", content: req.body.message }
  ]
});
res.json({
  reply: completion.choices[0].message.content
});
app.post("/image", async (req, res) => {
{ "prompt": "ein Cyberpunk Hund" }
const img = await openai.images.generate({
  model: "gpt-image-1",
  prompt: req.body.prompt
});
res.json({
  url: img.data[0].url
});
app.listen(3000, () => {
  console.log("Server läuft");
});
