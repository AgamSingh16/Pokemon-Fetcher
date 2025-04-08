import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./css/Home.css";
import PokemonFetcher from "./pages/PokemonFetcher";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={user ? <PokemonFetcher /> : <Login onLogin={handleLogin} />}
        />
        <Route path="/admin" element={<AdminPage user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
