import React from 'react';
import { UilLocationPinAlt, UilCelsius, UilFahrenheit } from '@iconscout/react-unicons'

// Importing the costume components 
import Search from './Search';

// Importing the helper functions
import { fetchLocation } from '../helpers/formaters';

// Importing the style file
import "../css/InformationCollection.css"

// Creating the InformationCollection component
const InformationCollection = ({ setQuery, setUnits }) => {
    return (
        <div className="information-collection">
            <Search setQuery={setQuery} />
            <div className="location-units">
                <button className='icon' onClick={() => fetchLocation(setQuery)}><UilLocationPinAlt  /></button>
                <div className="units">
                <button className='icon' onClick={() => setUnits({ units: "metric"})}>
                    <UilCelsius />
                </button>
                <button className="icon" onClick={() => setUnits({ units: "imperial"})}>
                    <UilFahrenheit />
                </button>
                </div>
            </div>
        </div>
    )
}

export default InformationCollection;