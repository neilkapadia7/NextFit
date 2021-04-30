import {applyMiddleware, combineReducers, createStore} from 'redux';
import saga from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension'

const initialState = {

}

const reducers = combineReducers({})

const middleware = [saga];

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;