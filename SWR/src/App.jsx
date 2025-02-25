import React, { useState } from "react";
import { SWRConfig } from "swr";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import Counter from "./Counter";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { Hello } from "./Hello";
import UseGithubUser from "./GithubUser";  
import Location from "./Location";

const fetcher = (url) => fetch(url).then((res) => res.json()); // Funzione fetcher da GithubUser.jsx

const App = () => {
  const handleLogin = (state) => {
    console.log("Login:", state);
  };

  const [language, setLanguage] = useState("en");

  function handleSetLanguage(language) {
    setLanguage(language);
  }

  return (
    <div>
      <button onClick={() => handleSetLanguage("it")} className="bg-green-500 px-2 py-0.5 border rounded"> IT </button>
      <button onClick={() => handleSetLanguage("en")} className="px-2 py-0.5 border rounded"> EN </button>
      <button onClick={() => handleSetLanguage("fr")} className="bg-red-500 px-2 py-0.5 border rounded"> FR </button>

      <SWRConfig value={{ fetcher }}> {/* Usa la funzione fetcher predefinita così non va scritta in tutti i componenti che lo richiedono */}
        <Container className="app">
          <LanguageContext.Provider value={language}>
            <Hello />
            <InteractiveWelcome />
          </LanguageContext.Provider>

          <Login onLogin={handleLogin} />
          <Counter initialValue={0} />
          <UseGithubUser username="" /> 
          <Location />
        </Container>
      </SWRConfig>
    </div>
  );
};

export default App;
