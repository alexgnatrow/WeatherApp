import React from 'react';
import { render } from "react-dom";
import { Provider } from 'react-redux';

import WeatherApp from './containers/WeatherApp';
import configureStore from './store/configureStore';

const store = configureStore();
const rootComp = document.getElementById('root');

render(
    <Provider store={store}>
    <WeatherApp />
    </Provider>
    , rootComp);