import React, { useState } from "react";

function CasellaInput({ onSendMessage }) {
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="flex p-4 bg-white border-t">
      <input
        type="text"
        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Messaggio"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button
        className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        onClick={handleSend}
      >
        ^
      </button>
      
    </div>
  );
}

export default CasellaInput;