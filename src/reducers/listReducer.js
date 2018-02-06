import {
    ADD_CITY_TO_THE_LIST,
    CHANGE_INPUT,
    DELETE_DATA,
    FETCH_CITY_SUCCESS,
    FETCH_CITY_ERROR,
    FETCH_CITY,
    DELETE_CITY} from '../types';

export const initState = {
    data:[],
    cities: [],
    inputValue: '',
    fetching: false,
    fetched: false,
};

export default  (state = initState, action) => {
    switch (action.type){
        case FETCH_CITY:
            return{
                ...state,
                fetching: true,
            };
        case FETCH_CITY_SUCCESS:
            return{
                ...state,
                data: state.data.concat(action.payload),
                fetching: false,
                fetched: true,
            };
        case FETCH_CITY_ERROR:
            return{
                ...state,
                data: state.data.concat(action.payload),
                fetching: false,
            };
        case ADD_CITY_TO_THE_LIST:
            return{
                ...state,
                cities: [...state.cities, action.payload.name],
            };
        case CHANGE_INPUT:
            return{
                ...state,
                inputValue: action.payload,
            };
        case DELETE_CITY:
            return{
                ...state,
                 // cities: state.cities.filter(() => this === action.payload),
                data: state.data.filter(() => this.name !== action.payload),
            };
        case DELETE_DATA:
            return{
                ...state,
                cities:[],
                data:[],
                inputValue: '',
            };
        default: return state;
    }
}

