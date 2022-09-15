import React from 'react';
import { UilSunset, UilSun} from "@iconscout/react-unicons"

// Importing the style file
import '../css/Footer.css';

// Creating the Footer component
const Footer = () => {
    return (
        <div className='footer'>
            <p><UilSun /> Sunrise: 06:50 AM </p>|
            <p><UilSun /> Highest: 38° </p>|
            <p><UilSun /> Lowest: 25°</p>|
            <p><UilSunset /> Sunset: 06:50 AM </p>
        </div>
    )
};

export default Footer;