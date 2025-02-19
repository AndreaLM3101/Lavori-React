import { useState, useEffect } from "react";

export const GithubUser = ({ username }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [username]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ border: "1px solid blue", padding: "10px" }}>
      <img src={user.avatar_url} alt={user.login} width="50" /> 
      <h3>Nome Utente: {user.name || "Nessun utente disponibile"}</h3>
      <p>Login: @{user.login || ""}</p>
    </div>
  );
};

export const GithubUsers = () => {
    const [username, setUsername] = useState("");
    const [users, setUsers] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setUsers([...users, username]);
      setUsername("");
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nome utente Github"
          />
          <button type="submit">Cerca</button>
        </form>
  
        <div>
          {users.map((user, index) => (
            <GithubUser key={index} username={user} />
          ))}
        </div>
      </div>
    );
  };
  

