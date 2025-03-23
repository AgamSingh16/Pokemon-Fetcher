import React, { useState } from "react";
import { users } from "../userinfo/users";
import Navbar from "../components/Navbar";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      onLogin(user);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Username:
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              readonly
              class="form-control"
              id="staticEmail"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Password:
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
