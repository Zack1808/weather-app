import React from "react";

// Importing the style file
import "../css/NavBar.css";

// Creating the NavBar component
const NavBar = () => {
  return (
    <div className="nav-container">
      <button className="nav-item">London</button>
      <button className="nav-item">Berlin</button>
      <button className="nav-item">Tokyo</button>
      <button className="nav-item">Washington DC</button>
      <button className="nav-item">Paris</button>
    </div>
  );
};

// Exporting the NavBar component
export default NavBar;
