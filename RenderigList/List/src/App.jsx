import React from "react";
import { Colors } from "./Color";

const App = () => {
  return (
    <div>
      <h1> Esercizio Rendering List </h1>
      <Colors colors={[
        { id: 1, name: "Nero" },
        { id: 2, name: "Bianco" },
        { id: 3, name: "Rosso" },
        { id: 4, name: "Blu" },
        { id: 5, name: "Verde" }
      ]} />
    </div>
  );
};

export default App;

