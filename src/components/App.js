import React from "react";

// Importing the costume components
import NavBar from "./NavBar";

// Importing the style file
import "../css/App.css";

// Creating the App component
const App = () => {
  return (
    <div className="app-container">
      <div className="navigation">
        <NavBar />
      </div>
    </div>
  );
};

// Exporting the App component
export default App;
