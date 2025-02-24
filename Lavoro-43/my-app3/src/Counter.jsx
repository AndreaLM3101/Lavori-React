import React, { useState } from "react";

function CounterDisplay({ counter }) {
  return <h2>Contatore: {counter}</h2>;
}

function Counter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue);

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


// Per rispondere alla domanda: bisogna passare una funzione anziché un valore. 
// setCounter accetta una funzione con il valore precedente, così evita in caso di cambi veloci che ci siano conflitti. 
// Quindi aspetta che il precedente si sia risolto prima di effettuare la funzione 