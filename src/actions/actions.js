import axios from 'axios';
import { apiKey } from './apiKey';
import{
    CHANGE_INPUT,
    DELETE_DATA,
    FETCH_CITY,
    FETCH_CITY_ERROR,
    FETCH_CITY_SUCCESS,
    DELETE_CITY,
    GET_CITY} from '../types';

export function fetchCityWeather(name){
    return dispatch => {
        dispatch({type: FETCH_CITY,});
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=${apiKey}`)
            .then(res => {
                dispatch(fetchCitySuccess(res.data));
            })
            .catch(err => dispatch({type: FETCH_CITY_ERROR, payload: err.message,}));
    };
}
export function fetchByCoords(lat, long){
    return dispatch => {
        dispatch({type: FETCH_CITY,});
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${apiKey}`)
            .then(res => {
                dispatch(fetchCitySuccess(res.data));
            })
            .catch(err => dispatch({type: FETCH_CITY_ERROR, payload: err.message,}));
    };
}
export function fetchCitySuccess(data){
    return{
        type: FETCH_CITY_SUCCESS,
        payload: data,
    };
}
export function deleteCity(name){
    return{
        type: DELETE_CITY,
        payload: name,
    };
}
export function getCity(name){
    return{
        type: GET_CITY,
        payload: name,
    }
}
export function setInputValue(value){
    return {
        type: CHANGE_INPUT,
        payload: value,
    };
}
export function clear(){
    return {
        type: DELETE_DATA,
    };
}

