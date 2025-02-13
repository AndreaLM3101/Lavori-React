import React, { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState(["Dare da mangiare alla pianta", "Annaffiare il gatto", "Passeggiare il frigorifero", "Mettere il cibo nel cane"]); 
  const [newTodo, setNewTodo] = useState("");

  function handleAddTodo() {
    setTodos([...todos, newTodo]); // Non mi ricordavo e l'ho cercato... è uno spread operator che copia todos e crea un nuovo array + l'elemento newTodo
    setNewTodo(""); 
  }

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)} 
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo();
          }}} // si anche questo ho cercato online... serve per usare il tasto invio
        placeholder="Aggiungi un Todo"
      />
      <button onClick={handleAddTodo}>Aggiungi</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li> // Crea un elemento per ogni Todo (Si ho cercato come si fa)
        ))}
      </ul>
    </div>
  );
}