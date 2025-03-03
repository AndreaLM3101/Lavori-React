import React, { useState, useEffect } from "react";
import useSWR from "swr";
import ContenitoreChat from "./ContenitoreChat";

const fetchResponse = async (message) => { // Funzione per ottenere la risposta del bot
  const response = await fetch("https://mocki.io/v1/9eada873-e439-4b6f-aabe-bacc8fedf655");
  const data = await response.json();
  return data.responses[Math.floor(Math.random() * data.responses.length)];
};

function App() {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState(null);  // Per tracciare l'ultimo messaggio inviato

  
  const addMessage = (message, isBot = false) => { // Funzione per aggiungere i messaggi (utente o bot)
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isBot },
    ]);
  };

  const handleSend = (newMessage) => { // Funzione per inviare i messaggi dell'utente
    if (newMessage.trim() !== "") {
      addMessage(newMessage, false); // Aggiungi il messaggio dell'utente
      setUserMessage(newMessage);    // Salva l'ultimo messaggio inviato
    }
  };
   
  useEffect(() => { // Effetto per gestire la risposta del bot
    if (userMessage) {
      const fetchBotResponse = async () => {
        const response = await fetchResponse(userMessage); // Chiamata API
        addMessage(response, true); // Aggiungi la risposta del bot
      };

      fetchBotResponse();  // Esegui la funzione quando l'utente invia un messaggio
    }
  }, [userMessage]); // La dipendenza è l'ultimo messaggio inviato

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <header className="bg-green-500 text-white py-4 shadow-md">
        <h1 className="text-2xl font-bold text-center">Whatsapp Freebooter</h1>
      </header>

      <div className="flex-1 flex justify-center items-center">
        <ContenitoreChat messages={messages} onSendMessage={handleSend} />
      </div>
    </div>
  );
}

export default App;
