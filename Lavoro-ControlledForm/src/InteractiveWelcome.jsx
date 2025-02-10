import React, { useState } from "react";
import Welcome from "./Welcome";

const InteractiveWelcome = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <Welcome name={name} />
    </div>
  );
};

export default InteractiveWelcome;

  