import {ADD_CITY_TO_THE_LIST, DELETE_DATA} from '../types';

const initState = {
  cities:[''],
  inputValue: '',
  willItWork: false
};

export default (state = initState, action) => {
    switch (action.type){
        case ADD_CITY_TO_THE_LIST:
            return{
                ...state,
                cities: [...this.state.cities, action.payload.name],
                willItWork: !this.state.willItWork,
            };
        case DELETE_DATA:
            return{
                ...state,
                initState,
            };
        default: return state;
    }
}

