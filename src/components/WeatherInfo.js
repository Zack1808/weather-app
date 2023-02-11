import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilTemperatureMinus,
  UilTemperaturePlus,
} from "@iconscout/react-unicons";

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
      <div className="weather-info">
        <div className="weather">
          <span>
            <UilTemperature /> Real feel: 1°
          </span>
          <span>
            <UilTear /> Humidity: 64%
          </span>
          <span>
            <UilWind /> Wind: 1km/h
          </span>
        </div>
        <div className="temp-day">
          <span>
            <UilSun /> Sunrise: 7:05AM
          </span>
          <span>
            <UilTemperatureMinus /> Lowest: -2°
          </span>
          <span>
            <UilTemperaturePlus /> Highest: 1°
          </span>
          <span>
            <UilSunset /> Sunset: 5:15PM
          </span>
        </div>
      </div>
    </div>
  );
};

// Exporting the WeatherInfo component
export default WeatherInfo;
