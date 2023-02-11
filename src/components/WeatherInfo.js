import React from "react";

// Importing the style file
import "../css/WeatherInfo.css";

// Creating the WeatherInfo component
const WeatherInfo = () => {
  return (
    <div className="weather-container">
      <div className="temperature-info">
        <div className="image">
          <img src="http://openweathermap.org/img/wn/01d@4x.png" alt="" />
          <h2>Clear</h2>
        </div>
        <div className="temp">4°</div>
      </div>
    </div>
  );
};

// Exporting the WeatherInfo component
export default WeatherInfo;
