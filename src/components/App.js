import React from 'react';

// Importing costume made components
import Header from './Header';
import InformationCollection from './InformationCollection';
import Details from './Details';
import WeatherInfo from './WeatherInfo';
import Footer from './Footer'

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
                <WeatherInfo />
                <Footer />
            </div>
        </div>
    )
};

export default App;