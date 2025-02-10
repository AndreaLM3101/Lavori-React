import React from "react";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";

const App = () => {
  const handleLogin = (state) => {
    console.log("Login State:", state);
  };

  return (
    <div>
      <InteractiveWelcome />
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default App;