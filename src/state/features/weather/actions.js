import * as types from './types';
import { fetchCurrentWeather, fetchExtendedForecast } from '../../../utilities/api';
import moment from 'moment';

export const fetchCurrentWeatherStart = () => ({
    type: types.FETCH_CURRENT_WEATHER_START
});

export const fetchCurrentWeatherSuccess = (weatherData) => ({
    type: types.FETCH_CURRENT_WEATHER_SUCCESS,
    payload: weatherData
});

export const fetchCurrentWeatherFailed = (error) => ({
    type: types.FETCH_CURRENT_WEATHER_FAILED,
    payload: error
});

export const fetchForecastStart = () => ({
    type: types.FETCH_FORECAST_START
});

export const fetchForecastSuccess = (forecastData) => ({
    type: types.FETCH_FORECAST_SUCCESS,
    payload: forecastData.filter((x) => moment.unix(x.dt).utc().format('HH') === '12').slice(0, 4)
});

export const fetchForecastFailed = (error) => ({
    type: types.FETCH_FORECAST_FAILED,
    payload: error
});

export const setLocation = (city) => ({
    type: types.SET_LOCATION,
    payload: city
});

export const changeDegreeType = () => ({
    type: types.CHANGE_TEMP_UNIT
});

export const requestCurrentWeather = (city) => {
    return (dispatch) => {
        dispatch(fetchCurrentWeatherStart());
        fetchCurrentWeather(city)
            .then((result) => dispatch(fetchCurrentWeatherSuccess(result.data)))
            .catch((error) => dispatch(fetchCurrentWeatherFailed(error.message)));
    };
};

export const requestDailyForecast = (city) => {
    return (dispatch) => {
        dispatch(fetchForecastStart());
        fetchExtendedForecast(city)
            .then((result) => dispatch(fetchForecastSuccess(result.data.list)))
            .catch((error) => dispatch(fetchForecastFailed(error.message)));
    };
};

export const getCurrentWeatherByLocation = () => {
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const lon = pos.coords.longitude.toFixed(5);
            const lat = pos.coords.latitude.toFixed(5);
            dispatch(setLocation({ lon, lat }));
            dispatch(requestCurrentWeather({ lon, lat }));
            dispatch(requestDailyForecast({ lon, lat }));
        });
    };
};
