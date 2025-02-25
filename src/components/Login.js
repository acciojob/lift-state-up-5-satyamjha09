import React from "react";

function Login({ isLoggedIn, setIsLoggedIn }) {
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); // Update parent state
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Login;
