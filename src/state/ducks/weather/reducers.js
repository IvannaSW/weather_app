import * as types from './types';

const INITIAL_STATE = {
    weather: null,
    isFetching: false,
    location: null,
    errorMessage: undefined
};

const weatherReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_CURRENT_WEATHER_START:
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
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        case types.SET_LOCATION:
            return {
                ...state,
                location: action.payload
            };

        default:
            return state;
    }
};

export default weatherReducer;
