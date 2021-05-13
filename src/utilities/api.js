import axios from 'axios';

const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/`
});

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchCurrentWeather = (city, units = 'metric') => {
    if (typeof city === 'object') {
        const { lat, lon } = city;
        return instance.get(`weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`);
    }
    return instance.get(`weather?q=${city}&appid=${API_KEY}&units=${units}`);
};

export const fetchExtendedForecast = (city, units = 'metric') => {
    if (typeof city === 'object') {
        const { lat, lon } = city;
        return instance.get(`forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`);
    }
    return instance.get(`forecast?q=${city}&appid=${API_KEY}&units=${units}`);
};
