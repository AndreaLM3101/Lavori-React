import React, { useState } from "react";
import ContenitoreChat from "./ContenitoreChat";

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (newMessage) =>
    newMessage.trim() && setMessages([...messages, newMessage]);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <header className="bg-green-500 text-white py-4 shadow-md">
        <h1 className="text-2xl font-bold text-center">Whatsapp Freebuter</h1>
      </header>

      <div className="flex-1 flex justify-center items-center">
        <ContenitoreChat messages={messages} onSendMessage={addMessage} />
      </div>
    </div>
  );
}

export default App;
