import React, { useEffect, useState } from 'react';

// Importing costume made components
import Header from './Header';
import InformationCollection from './InformationCollection';
import Details from './Details';
import WeatherInfo from './WeatherInfo';
import Footer from './Footer'

// Importing the style file
import '../css/App.css';

// Importing the api
import fetchWeather from '../api/fetchWeather';

// Importing helper functions
import { fetchLocation } from '../helpers/formaters'

// Creating the App component
const App = () => {

    const [query, setQuery] = useState({q: "Velika Gorica"});
    const [units, setUnits] = useState({units: "metric"});
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetchLocation(setQuery)
    }, [])

    useEffect(() => {
        fetch(query)
    }, [query, units])

    // Fetching the weather information
    const fetch = async(query) => {
        const weatherInfo = await fetchWeather({...query, ...units});
        setWeather(weatherInfo);
    }

    return (
        <div className='container'>
            <div className="display-weather">
                <Header setQuery={setQuery} />
                <InformationCollection setQuery={setQuery} setUnits={setUnits} />
                {
                    weather ? 
                    (
                        <>
                            <Details weather={weather} />
                            <WeatherInfo weather={weather} />
                            <Footer weather={weather} />
                        </>
                    ) 
                    : 
                    (
                    <div>Wait</div>
                    )
                }
            </div>
        </div>
    )
};

export default App;