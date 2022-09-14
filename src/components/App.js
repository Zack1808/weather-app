import React from 'react';

// Importing costume made components
import Header from './Header';
import Search from './Search'

// Importing the style file
import '../css/App.css';

// Creating the App component
const App = () => {
    return (
        <div className='container'>
            <div className="display-weather">
                <Header />
                <div className="information-collection">
                    <Search />
                </div>
            </div>
        </div>
    )
};

export default App;