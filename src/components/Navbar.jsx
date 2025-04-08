import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid d-flex align-items-end">
        <div className="d-flex align-items-end">
          <Link
            to="/"
            className="navbar-brand text-white d-flex align-items-end"
          >
            <img
              src={import.meta.env.BASE_URL + "./pokemon-logo.png"}
              alt="Logo"
              style={{ width: "100px", height: "75px" }}
              className="d-inline-block"
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
