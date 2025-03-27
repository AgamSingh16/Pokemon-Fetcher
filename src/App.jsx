import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./css/Home.css";
import PokemonFetcher from "./pages/PokemonFetcher";
import Login from "./pages/login";
import AdminPage from "./pages/AdminPage";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              user ? <PokemonFetcher /> : <Login onLogin={handleLogin} />
            }
          />
          <Route path="/admin" element={<AdminPage user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
