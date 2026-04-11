import React from "react";
import "./App.css";
import Header from "./components/Header";
import GiftForm from "./components/GiftForm";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div>
      <Header />
      <GiftForm />
      <Chatbot />
    </div>
  );
}

export default App;