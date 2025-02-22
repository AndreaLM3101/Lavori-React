import { useCounter } from "./useCounter";

function CounterDisplay({ counter }) {
  return <h2 style={{ fontSize: "20px", color: "#f3f" }}>Contatore: {counter}</h2>;
}

function Counter({ initialValue }) {
  const { counter, increment, decrement, reset } = useCounter(initialValue);

  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
      <button onClick={reset}>Resetta</button>
    </div>
  );
}

export default Counter;