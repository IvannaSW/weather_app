import { combineReducers } from 'redux';
import weatherReducer from './features/weather/reducers';

const rootReducer = combineReducers({
    weather: weatherReducer
});

export default rootReducer;
