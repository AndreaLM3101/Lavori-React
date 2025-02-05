import React from "react";

const Welcome = ({ name, age, surname }) => {
  return (
    <div>
      <p>Welcome, {name} {surname}</p>
      <p>Your age is {age}</p>
    </div>
  );
};

export default Welcome;

  