import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/listReducer';

export default function configureStore(initState) {
    const store = createStore(rootReducer, initState);

    if(module.hot){
        module.hot.accept('../reducers/listReducer',() =>{
            const nextRootReducer = require('../reducers/listReducer');
            store.replaceReducer(nextRootReducer);
        })
    }

    return store;
}