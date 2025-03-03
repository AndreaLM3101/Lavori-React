import React, { useEffect, useRef } from "react";
import NuvolaMessaggio from "./NuvolaMessaggio.jsx";

function ListaMessaggi({ messages }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
      {messages.map((message, index) => (
        <NuvolaMessaggio key={index} text={message.text} isRight={message.isBot} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ListaMessaggi;
