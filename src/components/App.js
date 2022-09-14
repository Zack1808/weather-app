import React from 'react';

// Importing costume made components
import Header from './Header';
import InformationCollection from './InformationCollection';
import Details from './Details';

// Importing the style file
import '../css/App.css';

// Creating the App component
const App = () => {
    return (
        <div className='container'>
            <div className="display-weather">
                <Header />
                <InformationCollection />
                <Details />
            </div>
        </div>
    )
};

export default App;