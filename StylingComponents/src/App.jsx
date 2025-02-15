import React from "react";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import Counter from "./Counter";

const App = () => {
  const handleLogin = (state) => {
    console.log("Login:", state);
  };

  return (
    <div>
      <InteractiveWelcome />
      <Login onLogin={handleLogin} />
      <Counter initialValue={0} />
    </div>
  );
};

export default App;