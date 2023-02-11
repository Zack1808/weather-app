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
    </div>
  );
};

// Exporting the App component
export default App;
