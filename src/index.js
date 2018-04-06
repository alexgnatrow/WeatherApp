import React from 'react';
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import listReducer, { initState } from './reducers/listReducer';
import WeatherApp from './containers/WeatherApp';

const store = createStore(
    listReducer,
    initState,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

const rootComp = document.getElementById('root');

render(
    <Provider store={store}>
        <WeatherApp />
    </Provider>,
    rootComp);