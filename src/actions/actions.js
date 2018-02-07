import axios from 'axios';
import { apiKey } from './apiKey';
import{
    ADD_CITY_TO_THE_LIST,
    CHANGE_INPUT,
    DELETE_DATA,
    FETCH_CITY,
    FETCH_CITY_ERROR,
    FETCH_CITY_SUCCESS,
    DELETE_CITY} from '../types';

export function fetchCityWeather(name){
    return dispatch => {
        console.log(name);
        dispatch({type: FETCH_CITY,});
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=${apiKey}`)
            .then(res => {
                dispatch(fetchCitySuccess(res.data));
                dispatch(addCityToTheList(res.data));
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
export function addCityToTheList(data){
    return {
        type: ADD_CITY_TO_THE_LIST,
        payload: data,
    };
}
export function deleteCity(name){
    return{
        type: DELETE_CITY,
        payload: name,
    };
}
export function setInputValue(value){
    return {
        type: CHANGE_INPUT,
        payload: value,
    };
}
export function clear(){
    console.log('clear() is executed mthfckr');//TO_DELETE
    return {
        type: DELETE_DATA,
    };
}

