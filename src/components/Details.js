import React from 'react';

// importing the style file
import '../css/Details.css';

// Importing helpers
import { fomrmatToLocalTime } from '../api/fetchWeather';

// Creating the Details component
const Details = ({ weather: {dt, name, country} }) => {
    return (
        <div className='details'>
            <div className='date-time-info'>
                {fomrmatToLocalTime(dt)}
            </div>
            <div className="city-country-info">
                {name}, {country}
            </div>
        </div>
    )
}

export default Details;