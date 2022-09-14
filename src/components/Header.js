import React from 'react';

// Importing the style file
import '../css/Header.css';

// Creating the Header
const Header = () => {
    return (
        <div className="header">
            <button>London</button>
            <button>Tokyo</button>
            <button>Brazil</button>
            <button>Berlin</button>
            <button>Pariz</button>
        </div>
    )
}

export default Header;