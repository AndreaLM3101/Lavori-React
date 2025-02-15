import React, { useEffect, useState } from "react";

function CounterDisplay({ counter }) {
  const styleCounter = {
    fontSize: "20px",
    color: "#f3f", // ho scritto 3 lettere a caso e mi è apparso il rosa
  };

  return <h2 style={styleCounter}>Contatore: {counter}</h2>;
}

function Counter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(()=>{
    console.log("the conuter is " + counter)
  }, [counter])

  const counterIncrement = () => {
    setCounter((c) => c + 1);
  };

  const counterDecrement = () => {
    setCounter((c) => c - 1);
  };

  const counterReset = () => {
    setCounter(initialValue);
  };

  return (
    <div>
      <CounterDisplay counter={counter} />
      <button className= "bg-amber-50 px-1 py-0.5 border rounded" onClick={counterIncrement}>Incrementa</button>
      <button className= "bg-amber-50 px-1 py-0.5 border rounded" onClick={counterDecrement}>Decrementa</button>
      <button className= "bg-amber-50 px-1 py-0.5 border rounded" onClick={counterReset}>Resetta</button>
    </div>
  );
}

export default Counter;

