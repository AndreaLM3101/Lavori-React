import React from "react";

const UncontrolledLogin = ({ onLogin, loginWithFormData }) => {
  const handleLogin = (event) => {
    event.preventDefault();

    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const remember = event.target.elements.namedItem("remember").checked;

    const data = {
      username,
      password,
      remember,
    };

    onLogin(data);
  };

  const handleLoginWithFormData = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target.form);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on",
    };

    loginWithFormData(data);
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>My Uncontrolled Form</h1>
      <input name="username" type="text" placeholder="NOME UTENTE" />
      <input name="password" type="password" placeholder="PASSWORD"/>
      <label>
        <input name="remember" type="checkbox" />
        Ricordami
      </label>
      
      <div><button type="submit" className= "bg-amber-50 px-1 py-0.5 border rounded">Login</button> 
      <button type="reset" className= "bg-amber-50 px-1 py-0.5 border rounded">Reset</button> </div>

      <button type="button" className= "bg-amber-50 px-1 py-0.5 border rounded" onClick={handleLoginWithFormData}>
        Login with FormData
      </button>
    </form>
  );
};

export default UncontrolledLogin;
