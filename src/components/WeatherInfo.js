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

// Importing the helper functions
import { fomrmatToLocalTime, iconUrlFormater } from "../helpers/formaters";

// Creating the WeatherInfo component
const WeatherInfo = ({ info }) => {
  return (
    <div className="weather-container">
      <div className="temperature-info">
        <div className="image">
          <img src={iconUrlFormater(info.icon)} alt="" />
          <h2>{info.description}</h2>
        </div>
        <div className="temp">{Math.round(info.temp)}°</div>
      </div>
      <div className="weather-info">
        <div className="weather">
          <span>
            <UilTemperature /> Real feel: {Math.round(info.feels_like)}°
          </span>
          <span>
            <UilTear /> Humidity: {info.humidity}%
          </span>
          <span>
            <UilWind /> Wind: {info.speed}km/h
          </span>
        </div>
        <div className="temp-day">
          <span>
            <UilSun /> Sunrise:{" "}
            {fomrmatToLocalTime(info.sunrise, info.timezone, "LT")}
          </span>
          <span>
            <UilTemperatureMinus /> Lowest: {Math.round(info.temp_min)}°
          </span>
          <span>
            <UilTemperaturePlus /> Highest: {Math.round(info.temp_max)}°
          </span>
          <span>
            <UilSunset /> Sunset:{" "}
            {fomrmatToLocalTime(info.sunset, info.timezone, "LT")}
          </span>
        </div>
      </div>
    </div>
  );
};

// Exporting the WeatherInfo component
export default WeatherInfo;
