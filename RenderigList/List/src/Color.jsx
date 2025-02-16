import React from "react";

export function Color({ color }) {
  return (
    <li key={color.id}>
      <h4>{color.name}</h4>
    </li>
  );
}

export function Colors({ colors }) {
  return (
    <ul>
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
}
