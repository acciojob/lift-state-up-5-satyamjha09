import React from "react";

const Login = ({ onLogin }) => {
    
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(); // Calls the parent function to update state
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
