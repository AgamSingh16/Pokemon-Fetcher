import React from "react";
import Navbar from "../components/Navbar";
import { Navigate, useNavigate } from "react-router-dom";

function AdminPage({ user }) {
  const navigate = useNavigate();

  if (!user || user.role !== "admin") {
    return (
      <div>
        <Navbar />
        <h2>You are not an admin</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h2>Welcome admin. you have access to this page.</h2>
    </div>
  );
}

export default AdminPage;
