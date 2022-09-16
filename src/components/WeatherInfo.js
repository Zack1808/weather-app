import React from 'react';
import { UilTemperature, UilTear, UilWind } from '@iconscout/react-unicons';

// Improting the style file
import '../css/WeatherInfo.css'

// Importing helper functions
import { iconUrlFormater } from '../helpers/formaters';

// Creating the WeatherInfo component
const WeatherInfo = ({ weather: {details, icon, temp, feels_like, humidity, speed}}) => {
    return (
        <div className="info">
            <div className="status">{details}</div>
            <div className='weather-info'>
                <div className="icon">
                    <img src={iconUrlFormater(icon)} alt="" />
                </div>
                <div className="temperature">
                    {temp.toFixed()}°
                </div>
                <div className="additional-info">
                    <p><UilTemperature /> Real feel: {feels_like.toFixed()}°</p>
                    <p><UilTear /> Humidity: {humidity.toFixed()}%</p>
                    <p><UilWind /> Wind: {speed.toFixed()}km/h</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo;