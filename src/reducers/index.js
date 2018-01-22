import { combineReducers } from 'redux';
import listReducer from 'listReducer';
import appReducer from 'weather-app/src/reducers/weatherReducer';

export default combineReducers({
    listReducer,
    appReducer,
})
