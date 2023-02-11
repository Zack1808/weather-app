import React, { useState } from "react";

// Importing the style file
import "../css/App.css";

// Importing costume components
import Header from "./Header";

// Creating the App component
const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="description">
        <h1>Britanski Trg</h1>
        <small>Saturday, 11th February 2023 | 9:35AM</small>
      </div>
    </div>
  );
};

// Exporting the App component
export default App;
