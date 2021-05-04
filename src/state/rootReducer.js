import { combineReducers } from 'redux';
import weatherReducer from './ducks/weather/reducers';

const rootReducer = combineReducers({
    weather: weatherReducer
});

export default rootReducer;
