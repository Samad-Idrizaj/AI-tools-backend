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
