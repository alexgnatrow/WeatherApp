import axios from 'axios';

import{ADD_CITY_TO_THE_LIST, DELETE_DATA} from '../types';


export function fetchCityWeather(name){
    return dispatch => {
        return axios.get(`api.openweathermap.org/data/2.5/weather?q=${name}&APPID=51cc7cd2f419b75295d500ac3977501a`)
            .then(res => {
                console.log(res.data.name);
                dispatch(addCityToTheList(res.data.results))
            })
            .catch(err => {console.log("No no no no");});
    };
}

export function addCityToTheList(data){
    return{
        type: ADD_CITY_TO_THE_LIST,
        payload: data,
    };
}

export function clear(){
    return {
        type: DELETE_DATA,
    };
}

