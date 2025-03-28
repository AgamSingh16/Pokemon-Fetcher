import React from "react";

function PokemonDisplay({ pokemonName, pokemonSprite }) {
  return (
    <div className="text-center">
      <img src={pokemonSprite} alt={pokemonName} className="img-fluid" />
    </div>
  );
}

export default PokemonDisplay;
