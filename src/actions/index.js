import axios from 'axios';

const API_KEY = process.env.OPENWEATHERMAPAPI;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Variable to hold action type. Making the string consistant accross the whole app.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},gb`;
  const request = axios.get(url);

  // console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}