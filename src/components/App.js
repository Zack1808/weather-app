import React, { useState, useEffect } from "react";

// Importing the style file
import "../css/App.css";

// Importing costume components
import Header from "./Header";
import WeatherInfo from "./WeatherInfo";

// Importing the fetch functions
import fetchWeather from "../api/fetchWeather";

// Creating the App component
const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="description">
        <h1>Britanski Trg</h1>
        <small>Saturday, 11th February 2023 | 9:35AM</small>
      </div>
      <WeatherInfo />
    </div>
  );
};

// Exporting the App component
export default App;
