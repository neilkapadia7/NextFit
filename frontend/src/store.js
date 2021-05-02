import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootSaga from './sagas'
import {userSignReducer} from './reducers/authReducer'
import {weightReducer} from './reducers/weightReducer'

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const refreshTokenFromStorage = localStorage.getItem('refresh') ? localStorage.getItem('refresh') : null;

const initialState = {
    user: { 
        userInfo: userInfoFromStorage,  
        refresh_token: refreshTokenFromStorage
    }
}

const reducers = combineReducers({
    user: userSignReducer,
    weight: weightReducer
})


const sagaMiddleware = createSagaMiddleware()
const middleware = [thunk, sagaMiddleware];

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

// const action = type => store.dispatch({type})

export default store;