import React, { useState } from "react";
import "./ChatApp.css";

function ChatApp() {
  const [messages, setMessages] = useState([
    { text: "Hey!", sender: "received" },
    { text: "Tutto bene?", sender: "sent" },
  ]);
  const [inputValue, setInputValue] = useState("");

  function handleSend() {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "sent" }]);
      setInputValue(""); // Pulisce l'input
    }
  }

  return (
    <div className="container">
      <div className="facciata">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat ${msg.sender === "sent" ? "sent" : "received"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSend}>Invia</button>
      </div>
    </div>
  );
}

export default ChatApp;
