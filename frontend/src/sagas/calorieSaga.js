import { call, put, takeLatest, all, select} from 'redux-saga/effects'
import { ADD_CALORIE_INIT } from '../constants/calorieConstants'
import * as calorieServices from '../service/calorie'
import * as calorieActions from '../actions/calorieAction'

export function* addCalorieSaga(param) {
    try {
        const response = yield call(calorieServices.addCalorie, param.payload);
        if(response) {
            yield put(calorieActions.addCalorie(response));
        }
    } catch (err) {
        console.log(err);
    }
}

export default function* actionWatcher() {
    yield all([
        takeLatest(ADD_CALORIE_INIT, addCalorieSaga)
    ])
}