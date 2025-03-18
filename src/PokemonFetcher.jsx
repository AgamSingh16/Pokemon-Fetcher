import React, { useState } from "react";

function PokemonFetcher() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonSprite, setPokemonSprite] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      if (!response.ok) {
        throw new Error("Could not fetch");
      }
      const data = await response.json();
      setPokemonSprite(data.sprites.front_default);
    } catch (error) {
      console.error(error);
      setPokemonSprite(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={pokemonName}
        placeholder="Enter Pokemon name"
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={fetchData}>Fetch Pokemon</button>
      {pokemonSprite && (
        <div>
          <img src={pokemonSprite} alt={pokemonName} />
        </div>
      )}
    </div>
  );
}

export default PokemonFetcher;
