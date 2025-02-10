import React from "react";
import NuvolaMessaggio from "./NuvolaMessaggio.jsx";

function ListaMessaggi({ messages }) {
  return (
    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
      {messages.map((message, index) => (
        <NuvolaMessaggio key={index} text={message} isRight={index % 2 !== 0} />
      ))}
    </div>
  );
}

export default ListaMessaggi;