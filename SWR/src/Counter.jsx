import React, { useEffect, useState } from "react";

function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log("The counter is " + counter);
  }, [counter]);

  const counterIncrement = () => {
    setCounter((c) => c + 1);
  };

  const counterDecrement = () => {
    setCounter((c) => c - 1);
  };

  const counterReset = () => {
    setCounter(initialValue);
  };

  return {
    counter: counter,
    onIncrement: counterIncrement,
    onDecrement: counterDecrement,
    onReset: counterReset,
  };
}

function CounterDisplay({ counter }) {
  const styleCounter = {
    fontSize: "20px",
    color: "#f3f", // Ho scritto 3 lettere a caso e mi è apparso il rosa
  };

  return <h2 style={styleCounter}>Contatore: {counter}</h2>;
}

function Counter({ initialValue }) {
  const { counter, onIncrement, onDecrement, onReset } = useCounter(initialValue);

  return (
    <div>
      <CounterDisplay counter={counter} />
      <button className="bg-amber-50 px-1 py-0.5 border rounded" onClick={onIncrement}>
        Incrementa
      </button>
      <button className="bg-amber-50 px-1 py-0.5 border rounded" onClick={onDecrement}>
        Decrementa
      </button>
      <button className="bg-amber-50 px-1 py-0.5 border rounded" onClick={onReset}>
        Resetta
      </button>
    </div>
  );
}

export default Counter;
