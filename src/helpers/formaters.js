import Moment from 'moment';

// Function that will turn the time received from the API into local time for display
export const fomrmatToLocalTime = (seconds, timezone, format = "dddd, Do MMM YYYY | LT") => {
    const date = new Date(seconds * 1000);
    const zone = timezone / 60;
    return Moment(date).utcOffset(zone).format(format);
}

// Function that will create the icon link
export const iconUrlFormater = (ic) => {
    return `http://openweathermap.org/img/wn/${ic}@2x.png`
}