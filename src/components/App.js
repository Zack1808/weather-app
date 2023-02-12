import React, { useState, useEffect } from "react";

// Importing the style file
import "../css/App.css";

// Importing costume components
import Header from "./Header";
import WeatherInfo from "./WeatherInfo";

// Importing the fetch functions
import fetchWeather from "../api/fetchWeather";

// Importing the helper functions
import { fetchLocation, fomrmatToLocalTime } from "../helpers/formaters";

// Creating the App component
const App = () => {
  // Setting up state
  const [query, setQuery] = useState({ q: "Velika Gorica" });
  const [units, setUnits] = useState({ units: "metric" });
  const [weather, setWeather] = useState(null);

  //   Getting the user location
  useEffect(() => {
    fetchLocation(setQuery);
  }, []);

  //   Fetching the weather
  useEffect(() => {
    fetch();
  }, [query, units]);

  //   Creating function that will fetch the weather according to the location
  const fetch = async () => {
    const weatherInfo = await fetchWeather({ ...query, ...units });
    setWeather(weatherInfo);
  };

  if (weather)
    return (
      <div className="app-container">
        <Header units={setUnits} query={setQuery} />
        <div className="description">
          <h1>
            {weather.name}, {weather.country}
          </h1>
          <small>{fomrmatToLocalTime(weather.dt, weather.timezone)}</small>
        </div>
        <WeatherInfo info={weather} />
      </div>
    );
};

// Exporting the App component
export default App;
