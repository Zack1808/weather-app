import React from 'react';
import { UilSunset, UilSun} from "@iconscout/react-unicons"

// Importing the style file
import '../css/Footer.css';
import { fomrmatToLocalTime } from '../helpers/formaters';

// Creating the Footer component
const Footer = ({ weather: {sunrise, sunset, temp_min, temp_max, timezone}}) => {
    return (
        <div className='footer'>
            <p><UilSun /> Sunrise: {fomrmatToLocalTime(sunrise, timezone, "LT")} </p>|
            <p><UilSun /> Highest: {temp_max.toFixed()}° </p>|
            <p><UilSun /> Lowest: {temp_min.toFixed()}°</p>|
            <p><UilSunset /> Sunset: {fomrmatToLocalTime(sunset, timezone, "LT")}</p>
        </div>
    )
};

export default Footer;