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

export const requestCurrentWeather = (city) => {
    return (dispatch) => {
        dispatch(fetchCurrentWeatherStart());
        fetchCurrentWeather(city)
            .then((result) => dispatch(fetchCurrentWeatherSuccess(result.data)))
            .catch((error) => dispatch(fetchCurrentWeatherFailed(error)));
    };
};
