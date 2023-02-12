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

// Importing the helper functions
import { fetchLocation } from "../helpers/formaters";

// Creating the Header component
const Header = ({ units, query }) => {
  // Setting up state
  const [celsius, setCelsius] = useState(true);

  // Function that switch the temp from celsius to fahrenheit and vice versa
  const handleClick = () => {
    if (celsius) {
      units({ units: "imperial" });
    } else {
      units({ units: "metric" });
    }
    setCelsius((prevState) => !prevState);
  };

  return (
    <div className="navigation">
      <Search />
      <div className="buttons">
        <button className="location" onClick={() => fetchLocation(query)}>
          Get <UilTemperature /> for current <UilLocationPinAlt />
        </button>
        <button className="unit" onClick={handleClick}>
          Convert to {celsius ? <UilFahrenheit /> : <UilCelsius />}
        </button>
      </div>
    </div>
  );
};

// Exporting the Header component
export default Header;
