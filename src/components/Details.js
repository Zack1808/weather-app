import React from 'react';

// importing the style file
import '../css/Details.css';

// Creating the Details component
const Details = () => {
    return (
        <div className='details'>
            <div className='date-time-info'>
                Wednesday, 14 September 2022 | Current time: 08:41 PM
            </div>
            <div className="city-country-info">
                Berlin, DE
            </div>
        </div>
    )
}

export default Details;