import Moment from "moment";

// Function that will turn the time received from the API into local time for display
export const fomrmatToLocalTime = (
  seconds,
  timezone,
  format = "dddd, Do MMM YYYY | LT"
) => {
  const date = new Date(seconds * 1000);
  const zone = timezone / 60;
  return Moment(date).utcOffset(zone).format(format);
};

// Function that will create the icon link
export const iconUrlFormater = (ic) => {
  return `http://openweathermap.org/img/wn/${ic}@4x.png`;
};

// Function that will get the lat and lon of the users position
export const fetchLocation = (setQuery) => {
  return navigator.geolocation.getCurrentPosition((pos) => {
    setQuery({ lat: pos.coords.latitude, lon: pos.coords.longitude });
  });
};

// Function that will return the correct classname according to the weather status and temp
export const changeBg = (weather, units) => {
  if (!weather) return "clear";
  const thresholdCold = units.units === "metric" ? 10 : 50;
  const thresholdNormal = units.units === "metric" ? 20 : 68;
  const rain = ["rain", "thunderstorm", "drizzle", "tornado"];
  const clear = ["clear", "clouds"];
  const snow = [
    "snow",
    "mist",
    "smoke",
    "haze",
    "dust",
    "fog",
    "sand",
    "ash",
    "squall",
  ];
  if (weather.dt > weather.sunset || weather.dt < weather.sunrise)
    return "night";
  if (rain.includes(weather.details.toLowerCase())) return "rain";
  if (clear.includes(weather.details.toLowerCase())) {
    if (weather.temp.toFixed() < thresholdCold) return "clear-cold";
    if (weather.temp.toFixed() < thresholdNormal) return "clear";
    return "clear-hot";
  }
  if (snow.includes[weather.details.toLowerCase()]) return "snow";
};
