import React from 'react';
import { UilTemperature, UilTear, UilWind } from '@iconscout/react-unicons';

// Improting the style file
import '../css/WeatherInfo.css'

// Creating the WeatherInfo component
const WeatherInfo = () => {
    return (
        <div className='weather-info'>
            <div className="icon">
                <img src="https://cdn-icons-png.flaticon.com/512/169/169367.png" alt="" />
            </div>
            <div className="temperature">
                34°
            </div>
            <div className="additional-info">
                <p><UilTemperature /> Real feel: 32°</p>
                <p><UilTear /> Humidity: 30%</p>
                <p><UilWind /> Wind: 32km/h</p>
            </div>
        </div>
    )
}

export default WeatherInfo;