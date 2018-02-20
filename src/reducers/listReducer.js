import {
    CHANGE_INPUT,
    DELETE_DATA,
    FETCH_CITY_SUCCESS,
    FETCH_CITY_ERROR,
    FETCH_CITY,
    DELETE_CITY,
    GET_CITY} from '../types';


export const initState = {
    data:[],
    current: {},
    inputValue: '',
    fetching: false,
    fetched: false,
};

export default (state = initState, action) => {
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
        case CHANGE_INPUT:
            return{
                ...state,
                inputValue: action.payload,
            };
        case DELETE_CITY:
            return{
                ...state,
                data: state.data.filter((data) => data.name !== action.payload),
            };
        case GET_CITY:
            return{
                ...state,
                current: state.data.find((city)=>{
                    return city.name === action.payload;
                })
            };
        case DELETE_DATA:
            return{
                ...state,
                data:[],
                current: {},
                inputValue: '',
                fetched: false,
            };
        default: return state;
    }
}

