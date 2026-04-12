import { useState } from "react";

const API_KEY = "sk-PASTE-YOUR-KEY-HERE"; // ⚠️ Replace!

function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "👋 Hi! I'm GiftyAI. Tell me about the person you're gifting!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const history = [
    { role:"system", content:"You are GiftyAI, a gift recommendation assistant. Keep replies short (3-5 lines), suggest 2-3 specific gifts with ₹ prices." }
  ];

  async function sendMessage() {
    if (!input.trim()) return;
    const userMsg = { role:"user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method:"POST",
        headers:{ "Content-Type":"application/json", "Authorization":`Bearer ${API_KEY}` },
        body: JSON.stringify({
          model:"gpt-3.5-turbo",
          messages:[...history, { role:"user", content:input }],
          max_tokens:200
        })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role:"bot", text: data.choices[0].message.content }]);
    } catch {
      setMessages(prev => [...prev, { role:"bot", text:"Sorry, something went wrong!" }]);
    }
    setLoading(false);
  }

  return (
    <section className="chat-section">
      <div className="section-label">✦ Ask our AI</div>
      <h2 className="section-title">Chat with <em>GiftyAI</em></h2>
      <div className="chat-card">
        <div className="chat-messages">
          {messages.map((m,i) => (
            <div key={i} className={`chat-bubble ${m.role}`}>{m.text}</div>
          ))}
          {loading && <div className="chat-bubble typing">GiftyAI is thinking…</div>}
        </div>
        <div className="chat-input-row">
          <input value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key==="Enter" && sendMessage()}
            placeholder="e.g. Gift for my mom who loves cooking, budget ₹500" />
          <button onClick={sendMessage}>Send ↑</button>
        </div>
      </div>
    </section>
  );
}
export default Chatbot;