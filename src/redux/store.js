import { combineReducers, createStore } from 'redux';
import {weatherReducer,selectedCityReducer} from './reducer';

const Weather= combineReducers({
    weathers: weatherReducer,
    selectCity:selectedCityReducer,

});

export const store= createStore(Weather)