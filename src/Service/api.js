import axios from 'axios';

const API_KEY = 'e31dd336d0d97fb1aa1965f80456e95d';
const URL = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeather = async(city, country) => {
    const data = await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
    return data;
}