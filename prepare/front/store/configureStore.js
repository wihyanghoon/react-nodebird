import { createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/index'
import rootSaga from '../sagas'
import createSagaMiddleware from 'redux-saga'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))

    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga)
    
    return store;
}

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'devlopment',
});

export default wrapper