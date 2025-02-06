import React from "react";
import Age from "./Age";
import Message from "./Message";

const Welcome = ({ name, age }) => {
  return (
    <div>
      <p>Welcome, {name}!</p>
      <Message age={age} />
      {age > 18 && <Age age={age} name={name} />}
      {age > 18 && age < 65 && <Age age={age} name={name} />}
      {age > 18 && name === "John" && <Age age={age} name={name} />}
      {age && <Age age={age} name={name} />}
      {age && <Age age={age} name={name} />}
    </div>
  );
};

export default Welcome;