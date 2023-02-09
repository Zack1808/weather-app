import React from "react";

// Importing the costume components
import NavBar from "./NavBar";
import Search from "./Search";

// Importing the style file
import "../css/App.css";

// Creating the App component
const App = () => {
  return (
    <div className="app-container">
      <div className="navigation">
        <NavBar />
        <div className="search">
          <Search />
        </div>
      </div>
    </div>
  );
};

// Exporting the App component
export default App;
