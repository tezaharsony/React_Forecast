import axios from 'axios'

const API_KEY = 'ed0f2167fc78250608e942308040febd'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},id`
    const request = axios.get(url)

    console.log(' ini request :' ,request);
    return {
      type : FETCH_WEATHER,
      payload : request
  };
}
