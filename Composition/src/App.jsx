import React from "react";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import Counter from "./Counter";
import { Container } from "./Container";

const App = () => {
  const handleLogin = (state) => {
    console.log("Login:", state);
  };

  return (
    <Container className="app">
      <InteractiveWelcome />
      <Login onLogin={handleLogin} />
      <Counter initialValue={0} />
    </Container>
  );
};

export default App;