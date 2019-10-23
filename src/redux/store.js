import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

//so if we remember we need add middleware to our store, so when whatever actions gets fired or dispatched, we can catch them and display them

import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
