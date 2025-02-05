import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";

function App() {
  return (
    <div class="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
      <Hello />
      <Welcome name="Andrea" age={25} />
    </div>
  );
}

export default App;


