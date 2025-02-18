import React from "react";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import Counter from "./Counter";
import { Container } from "./Container"
import { LanguageContext } from "./LanguageContext";
import { Hello } from "./Hello";
import { useState } from "react";

const App = () => {
  const handleLogin = (state) => {
    console.log("Login:", state);
  };

  const [language, setLanguage] = useState("en")

  function handleSetLanguage (language) {
    setLanguage (language)
  }

  return (
    <div>
      <button onClick={() => handleSetLanguage("it")} className= "bg-green-500 px-2 py-0.5 border rounded"> IT </button>
      <button onClick={() => handleSetLanguage("en")} className= "px-2 py-0.5 border rounded"> EN </button>
      <button onClick={() => handleSetLanguage("fr")} className= "bg-red-500 px-2 py-0.5 border rounded"> FR </button>
      <Container className="app">
      <LanguageContext.Provider value={language}>
        <Hello />
      </LanguageContext.Provider>
      <InteractiveWelcome />
      <Login onLogin={handleLogin} />
      <Counter initialValue={0} />
    </Container>
    </div>
  );
};

export default App;