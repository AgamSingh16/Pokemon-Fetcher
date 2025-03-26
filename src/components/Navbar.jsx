import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid d-flex align-items-end">
        <div className="d-flex align-items-end">
          <Link to="/" class="navbar-brand text-white d-flex align-items-end">
            <img
              src="./src/assets/pokemon-logo-png-1444.png"
              alt="Logo"
              style={{ width: "100px", height: "75px" }}
              class="d-inline-block"
            />
          </Link>
        </div>
        <div className="ms-auto">
          <Link to="/admin" className="btn btn-outline-light me-2">
            Admin page
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
