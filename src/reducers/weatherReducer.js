import {DELETE_DATA, SET_CITY_WEATHER} from '../types';

const initState = {
    cities:[''],
    inputValue: false,
};

export default (state = initState, action) => {
    switch (action.type){
        case SET_CITY_WEATHER:
            return{
                ...state,
                cities: action.payload.name,
            };
        case DELETE_DATA:
            return{
                ...state,
                initState,
            };
        default: return state;
    }

}