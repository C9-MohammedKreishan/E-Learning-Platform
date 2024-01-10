import React, { useContext, useState, createContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
const Navbar = () => {
  return (
    <div>
      
        <div className="Nav" style={{ display: "flex", gap: "16px" }}>
          <Link to="/users/register">Register</Link>
          ||
          <Link to="/about">About</Link>
          ||
          <Link to="/users/login">Login</Link>
          ||
          <Link to="/users/dashboard">Dashboard</Link>
          ||
          <Link to="/articles">Courses</Link>
        </div>
      
    </div>
  );
};

export default Navbar;
