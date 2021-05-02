import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootSaga from './sagas'
import {userSignReducer} from './reducers/authReducer'

const userInfoFromStorage = localStorage.getItem('token') ? localStorage.getItem('token') : null;

const initialState = {
    user: { token: userInfoFromStorage }
}

const reducers = combineReducers({
    user: userSignReducer
})


const sagaMiddleware = createSagaMiddleware()
const middleware = [thunk, sagaMiddleware];

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

// const action = type => store.dispatch({type})

export default store;