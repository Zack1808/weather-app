import axios from 'axios'
import Moment from 'moment';

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "c17ef25a64c46328d53808bfb5c912ac";

// Funciton that will return just the data we need for the app
const formatWeatherData = (data) => {
    const {
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name, 
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed},
        timezone
    } = data;

    const {
        main: details,
        icon
    } = weather[0]

    return {temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed, timezone};
}

// Function that will turn the time received from the API into local time for display
export const fomrmatToLocalTime = (seconds, format = "dddd, Do MMM YYYY | LT") => {
    const date = new Date(seconds * 1000);
    return Moment(date).format(format);
}

// Function that will create the icon link
export const iconUrlFormater = (ic) => {
    return `http://openweathermap.org/img/wn/${ic}@2x.png`
}

// Function that will fetch the weather information for a specific region
const fetchWeather = async(searchParams) => {
    const params = {...searchParams, appid: API_KEY};
    const result = await axios.get(BASE_URL, {params})
    return formatWeatherData(result.data);
}

export default fetchWeather;