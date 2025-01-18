import React, { useState } from "react";
import useSWR from "swr";
import "./ChatApp.css";

const fetchBotResponse = async (message) => {
  const response = await fetch(
    `https://mocki.io/v1/your-endpoint-id?message=${message}`
  );
  const data = await response.json();
  return data.response;
};

function ChatApp() {
  const [messages, setMessages] = useState([
    { text: "Ciao!", sender: "received" },
    { text: "Come va?", sender: "sent" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = async () => {
    if (inputValue.trim() !== "") {
      // Aggiungiamo il messaggio inviato dall'utente
      setMessages([...messages, { text: inputValue, sender: "sent" }]);

      // Reset dell'input
      setInputValue("");

      // Chiamata all'API per ottenere la risposta del bot
      const { data, error } = useSWR(inputValue, fetchBotResponse);

      if (data) {
        // Aggiungiamo la risposta del bot alla chat
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: data, sender: "received" },
        ]);
      } else if (error) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Errore ", sender: "received" },
        ]);
      }
    }
  };

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
