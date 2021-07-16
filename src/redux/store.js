import { createStore , applyMiddleware} from  'redux';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import rootReducer from './reducers/index.js';
import rootSaga from './sagas/index.js';


const SagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger),applyMiddleware(SagaMiddleware)));

SagaMiddleware.run(rootSaga);
export default store;



// import { createStore , compose} from  'redux';
// import rootReducer from './reducers/index.js';

// const store = compose(window.devToolsExtension && window.devToolsExtension())(createStore)(rootReducer);

// export default store;
