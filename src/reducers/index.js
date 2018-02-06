import { combineReducers } from 'redux';
import listReducer from 'listReducer';
import weatherReducer from 'weatherReducer';

export default combineReducers({
    listReducer,
    weatherReducer,
})
