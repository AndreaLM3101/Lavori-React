import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const isFormValid = username && password;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password, remember });
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setRemember(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          Remember Me
        </label>
      </div>
      <div>
        <button style={{ backgroundColor: password.length < 8 ? "red" : "green" }} type="submit" disabled={!isFormValid}>
          Login
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default Login;
