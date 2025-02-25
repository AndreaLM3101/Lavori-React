import React, { useEffect, useRef } from "react";
import NuvolaMessaggio from "./NuvolaMessaggio.jsx";

function ListaMessaggi({ messages }) {
  const messagesEndRef = useRef(null); 

  useEffect(() => {
    // Scrolliamo al fondo ogni volta che l'array dei messaggi cambia
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" }); // scrollIntoView è un metodo di JS, behavior: "smooth" gestisce lo scorrimento visivamente
    }
  }, [messages]); // Questo effetto si attiva ogni volta che cambia l'array dei messaggi

  return (
    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
      {messages.map((message, index) => (
        <NuvolaMessaggio key={index} text={message} isRight={index % 2 !== 0} />
      ))}
      <div ref={messagesEndRef} /> {/* Div per fare lo scroll al fondo, ho dovuto cercare come si fà */}
    </div>
  );
}

export default ListaMessaggi;
