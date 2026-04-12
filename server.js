import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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",
        "Content-Type": "application/json"
        "HTTP-Referer": "http://localhost:5500",
        "X-Title": "GiftyAI"
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct:free",
        messages: [
          { role: "system", content: "You are a smart gift assistant." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching AI response");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

