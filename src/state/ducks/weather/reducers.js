import * as types from './types';

const INITIAL_STATE = {
    weather: null,
    forecast: null,
    isFetching: false,
    location: null,
    tempUnit: 'C',
    errorMessage: undefined
};

const weatherReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_CURRENT_WEATHER_START:
        case types.FETCH_FORECAST_START:
            return {
                ...state,
                isFetching: true
            };
        case types.FETCH_CURRENT_WEATHER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                weather: action.payload
            };
        case types.FETCH_CURRENT_WEATHER_FAILED:
        case types.FETCH_FORECAST_FAILED:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        case types.FETCH_FORECAST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                forecast: action.payload
            };
        case types.SET_LOCATION:
            return {
                ...state,
                location: action.payload
            };
        case types.CHANGE_TEMP_UNIT:
            return {
                ...state,
                tempUnit: state.tempUnit === 'C' ? 'F' : 'C'
            };

        default:
            return state;
    }
};

export default weatherReducer;
