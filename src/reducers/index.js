import { combineReducers } from 'redux';
import  ReducerWeather  from './reducers_weather'

const rootReducer = combineReducers({
  weather : ReducerWeather
});

export default rootReducer;
