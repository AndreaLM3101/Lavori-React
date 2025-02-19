import React, { useState } from "react";
import Welcome from "./Welcome";

const InteractiveWelcome = () => {
  const [name, setName] = useState("Andrea");
  

  return (
    <div>
      <div title="titolo" className="styleTitolo"> 
        <h1>LAVORO REACT</h1>
        </div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome"/>
      <Welcome name={name} />
    </div>
  );
};

export default InteractiveWelcome;

  