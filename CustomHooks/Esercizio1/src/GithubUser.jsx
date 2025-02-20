import { useState, useEffect } from "react";

const useGithubUser = (username) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = () => {
    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User not found"); // Non ricordandomi ho dovuto cercare online da qui in poi
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (username) {
      fetchUser();
    }
  }, [username]);

  return { user, loading, error, fetchUser };
};

const GithubUser = ({ username }) => {
  const { user, loading, error } = useGithubUser(username);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ border: "1px solid blue", padding: "10px" }}>
      <img src={user.avatar_url} alt={user.login} width="50" />
      <h3>Nome Utente: {user.name || "Nessun utente disponibile"}</h3>
      <p>Login: @{user.login || ""}</p>
    </div>
  );
};

const GithubUsers = () => {
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

export default GithubUsers;
