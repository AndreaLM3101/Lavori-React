import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name="Andrea" />} />
        <Route path="/counter" element={<Counter initialValue={0} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
