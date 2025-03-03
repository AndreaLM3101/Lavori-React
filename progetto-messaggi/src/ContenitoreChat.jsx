import React from "react";
import ListaMessaggi from "./ListaMessaggi";
import CasellaInput from "./CasellaInput";

function ContenitoreChat({ messages, onSendMessage }) {
  return (
    <div className="flex flex-col h-[90vh] w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      <ListaMessaggi messages={messages} />
      <CasellaInput onSendMessage={onSendMessage} />
    </div>
  );
}

export default ContenitoreChat;
