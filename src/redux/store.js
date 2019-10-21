import { createStore, applyMiddleware } from 'redux';

//so if we remember we need add middleware to our store, so when whatever actions gets fired or dispatched, we can catch them and display them

import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;