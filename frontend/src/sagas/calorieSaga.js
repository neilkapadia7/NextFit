import { call, put, takeLatest, all, select} from 'redux-saga/effects'
import { ADD_CALORIE_INIT, GET_CALORIE, GET_CALORIE_INIT } from '../constants/calorieConstants'
import * as calorieServices from '../service/calorie'
import * as calorieActions from '../actions/calorieAction'

export function* addCalorieSaga(param) {
    try {
        console.log('Calorie Saga')
        const response = yield call(calorieServices.addCalorie, param.payload);
        if(response) {
            yield put(calorieActions.addCalorie(response));
        }
    } catch (err) {
        console.log(err);
    }
}

export function* getCalorieSaga() {
    try {
        const response = yield call(calorieServices.getCalorie);
        if(response) {
            yield put(calorieActions.getCalorie(response))
        }    
        } catch (err) {
            console.log(err);
        }
}

export default function* actionWatcher() {
    yield all([
        takeLatest(ADD_CALORIE_INIT, addCalorieSaga),
        takeLatest(GET_CALORIE_INIT, getCalorieSaga)
    ])
}