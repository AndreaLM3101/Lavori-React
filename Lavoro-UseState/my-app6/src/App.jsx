import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";
import Allert from "./AllertClock";
import Counter from "./Counter";


function App() {
  return (
    <div className="bg-yellow-300 flex flex-col items-center justify-center min-h-screen ">
      <Hello  />
      <Welcome name="John" age={25} />
      <Allert />
      <Counter initialValue={0}/>
    </div>
  );
}

export default App;


