function Age({ age, name }) {
  return (
    <>
      {age > 18 ? (
        <p>Age: {age}</p>
      ) : age > 18 && age < 65 ? (
        <p>Age between 18 and 65: {age}</p>
      ) : age > 18 && name === "John" ? (
        <p>Age for John: {age}</p>
      ) : age ? (
        <p>Age: {age}</p>
      ) : null}
    </>
  );
}

export default Age;