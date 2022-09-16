import React from 'react';

// Importing the style file
import '../css/Header.css';

// Creating the Header
const Header = ({ setQuery }) => {
    return (
        <div className="header">
            <button onClick={() => setQuery({ q: "london"})}>London</button>
            <button onClick={() => setQuery({ q: "tokyo"})}>Tokyo</button>
            <button onClick={() => setQuery({ q: "brazil"})}>Brazil</button>
            <button onClick={() => setQuery({ q: "berlin"})}>Berlin</button>
            <button onClick={() => setQuery({ q: "paris"})}>Paris</button>
        </div>
    )
}

export default Header;