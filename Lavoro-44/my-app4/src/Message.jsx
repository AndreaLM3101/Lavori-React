function Message({ age }) {
  return (
    <p>{age > 18 ? "You are over 18!" : "You are very young!"}</p>
  );
}

export default Message;