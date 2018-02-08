import {
    CHANGE_INPUT,
    DELETE_DATA,
    FETCH_CITY_SUCCESS,
    FETCH_CITY_ERROR,
    FETCH_CITY,
    DELETE_CITY,
    GET_CITY} from '../types';

const initCity = {"coord":{"lon":24.03,"lat":49.84},"weather":[{"id":741,"main":"Fog","description":"fog","icon":"50d"}],"base":"stations","main":{"temp":275.15,"pressure":1011,"humidity":93,"temp_min":275.15,"temp_max":275.15},"visibility":150,"wind":{"speed":2,"deg":40},"clouds":{"all":90},"dt":1518085800,"sys":{"type":1,"id":7361,"message":0.0023,"country":"UA","sunrise":1518068742,"sunset":1518103867},"id":702550,"name":"Lviv","cod":200};

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

