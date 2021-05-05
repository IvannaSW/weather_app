import * as types from './types';
import { fetchCurrentWeather } from '../../../utilities/api';

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
            .catch((error) => dispatch(fetchCurrentWeatherFailed(error)));
    };
};

export const getCurrentWeatherByLocation = () => {
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const lon = pos.coords.longitude.toFixed(5);
            const lat = pos.coords.latitude.toFixed(5);
            dispatch(setLocation({ lon, lat }));
            dispatch(requestCurrentWeather({ lon, lat }));
        });
    };
};
