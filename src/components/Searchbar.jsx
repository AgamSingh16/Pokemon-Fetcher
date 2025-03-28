import React from "react";

function Searchbar({ pokemonName, setPokemonName, fetchData }) {
  return (
    <div className="d-flex ms-auto align-items-end">
      <input
        className="form-control me-2"
        role="search"
        type="text"
        aria-label="Search"
        value={pokemonName}
        placeholder="Enter Pokemon name"
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button className="btn btn-outline-success" onClick={fetchData}>
        Search
      </button>
    </div>
  );
}

export default Searchbar;
