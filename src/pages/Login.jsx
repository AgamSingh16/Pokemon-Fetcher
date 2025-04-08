import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignup ? "/signup" : "/login";

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }

      if (!isSignup) {
        onLogin(data);
      } else {
        alert("Signup successful. please login");
        setIsSignup(false);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>{isSignup ? "Signup" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            Username:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Password:
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="btn btn-outline-success">
          {isSignup ? "Signup" : "Login"}
        </button>
      </form>
      <br />
      <button
        onClick={() => setIsSignup(!isSignup)}
        className="btn btn-outline-success"
      >
        {isSignup ? "Switch to Login" : "Switch to Signup"}
      </button>
    </div>
  );
}

export default Login;
