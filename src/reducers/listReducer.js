import {
    CHANGE_INPUT,
    DELETE_DATA,
    FETCH_CITY_SUCCESS,
    FETCH_CITY_ERROR,
    FETCH_CITY,
    DELETE_CITY,
    GET_CITY} from '../types';

const initCity = {
    "weather":[{"id":741,"main":"Fog","description":"fog","icon":"50d"}],
    "main":{"temp":275.15,"pressure":1011,"humidity":93,"temp_min":275.15,"temp_max":275.15},
    "wind":{"speed":2,"deg":40},
    "name":"Lviv"};

export const initState = {
    data:[initCity],
    current: initCity,
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
                data:[initCity],
                current: initCity,
                inputValue: '',
                fetched: false,
            };
        default: return state;
    }
}

