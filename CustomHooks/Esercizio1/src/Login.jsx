import React, { useState } from "react";

function useLogin(initialValues) {
  const [username, setUsername] = useState(initialValues.username);
  const [password, setPassword] = useState(initialValues.password);
  const [remember, setRemember] = useState(initialValues.remember);

  const isFormValid = username && password;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
    if (name === "remember") setRemember(type === "checkbox" ? checked : value);
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setRemember(false);
  };

  return {
    username,
    password,
    remember,
    isFormValid,
    onInputChange: handleInputChange,
    onReset: handleReset,
  };
}

const Login = ({ onLogin }) => {
  const { username, password, remember, isFormValid, onInputChange, onReset } = useLogin({ username: "", password: "", remember: false });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password, remember });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onInputChange}
          placeholder="Username"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onInputChange}
          placeholder="Password"
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="remember"
            checked={remember}
            onChange={onInputChange}
          />
          Remember Me
        </label>
      </div>
      <div>
        <button style={{ backgroundColor: password.length < 8 ? "red" : "green" }} type="submit" disabled={!isFormValid}>
          Login
        </button>
        <button type="button" onClick={onReset}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default Login;
