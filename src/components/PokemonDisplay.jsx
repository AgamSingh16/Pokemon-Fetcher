import React from "react";

function PokemonDisplay({ pokemonName, pokemonSprite }) {
  return (
    <div>
      <img src={pokemonSprite} alt={pokemonName} />
    </div>
  );
}

export default PokemonDisplay;
