import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer.jsx';

//Array of mniddlewares
const middlewares = [logger];

//Spread in all our middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;