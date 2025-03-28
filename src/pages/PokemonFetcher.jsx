import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import PokemonDisplay from "../components/PokemonDisplay";

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
      <Navbar />
      <Searchbar
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
        fetchData={fetchData}
      />
      {pokemonSprite && (
        <PokemonDisplay
          pokemonName={pokemonName}
          pokemonSprite={pokemonSprite}
        />
      )}
    </div>
  );
}

export default PokemonFetcher;
