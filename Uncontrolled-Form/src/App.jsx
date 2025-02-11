import React from "react";
import UncontrolledLogin from "./UncontrolledLogin";

const App = () => {
  const handleOnLogin = (data) => {
    console.log("Logged in using DOM API:", data);
  };

  const handleLoginWithFormData = (data) => {
    console.log("Logged in using FormData API:", data);
  };

  return (
    <div>
      <h1>Login</h1>
      <UncontrolledLogin 
        onLogin={handleOnLogin} 
        loginWithFormData={handleLoginWithFormData} 
      />
    </div>
  );
};

export default App;