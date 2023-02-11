import React, { useState } from "react";
import {
  UilCelsius,
  UilFahrenheit,
  UilTemperature,
  UilLocationPinAlt,
} from "@iconscout/react-unicons";

// Importing the style file
import "../css/Header.css";

// Importing costume components
import Search from "./Search";

// Creating the Header component
const Header = () => {
  // Setting up state
  const [celsius, setCelsius] = useState(true);

  return (
    <div className="navigation">
      <Search />
      <div className="buttons">
        <button className="location">
          Get <UilTemperature /> for current <UilLocationPinAlt />
        </button>
        <button
          className="unit"
          onClick={() => setCelsius((prevState) => !prevState)}
        >
          Convert to {celsius ? <UilCelsius /> : <UilFahrenheit />}
        </button>
      </div>
    </div>
  );
};

// Exporting the Header component
export default Header;
