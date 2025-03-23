import React, { useState } from "react";
import "./css/Home.css";
import PokemonFetcher from "./pages/PokemonFetcher";
import Login from "./pages/login";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  return (
    <div className="App">
      {user ? <PokemonFetcher user={user} /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
