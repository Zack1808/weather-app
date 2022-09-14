import React from 'react';
import { UilLocationPinAlt, UilCelsius, UilFahrenheit } from '@iconscout/react-unicons'

// Importing the costume components 
import Search from './Search';

// Importing the style file
import "../css/InformationCollection.css"

// Creating the InformationCollection component
const InformationCollection = () => {
    return (
        <div className="information-collection">
            <Search />
            <div className="location-units">
                <button className='icon'><UilLocationPinAlt  /></button>
                <div className="units">
                <button className='icon celcius'>
                    <UilCelsius />
                </button>
                <button className="icon farenheit">
                    <UilFahrenheit />
                </button>
                </div>
            </div>
        </div>
    )
}

export default InformationCollection;