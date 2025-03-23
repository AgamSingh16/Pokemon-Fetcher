import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid d-flex align-items-end">
        <div className="d-flex align-items-end">
          <a class="navbar-brand text-white d-flex align-items-end">
            <img
              src="./src/assets/pokemon-logo-png-1444.png"
              alt="Logo"
              style={{ width: "100px", height: "75px" }}
              class="d-inline-block"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
