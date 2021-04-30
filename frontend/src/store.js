import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootSaga from './sagas'
import {googleSignReducer} from './reducers/authReducer'

const initialState = {

}

const reducers = combineReducers({
    gooogle: googleSignReducer
})


const sagaMiddleware = createSagaMiddleware()
const middleware = [thunk, sagaMiddleware];

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

// const action = type => store.dispatch({type})

export default store;