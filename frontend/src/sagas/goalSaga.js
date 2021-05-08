import { call, put, takeLatest, all, select} from 'redux-saga/effects'
import { ADD_GOAL_INIT, GET_GOAL_INIT } from '../constants/goalConstants'
import * as goalServices from '../service/goal'
import * as goalActions from '../actions/goalActions'

export function* addGoalSaga(param) {
    try {
        console.log('Calorie Saga')
        const response = yield call(goalServices.addGoal, param.payload);
        if(response) {
            yield put(goalActions.addGoal(response));
        }
    } catch (err) {
        console.log(err);
    }
}

export function* getGoalSaga() {
    try {
        const response = yield call(goalServices.getGoal);
        if(response) {
            yield put(goalActions.getGoal(response))
        }    
        } catch (err) {
            console.log(err);
        }
}

export default function* actionWatcher() {
    yield all([
        takeLatest(ADD_GOAL_INIT, addGoalSaga),
        takeLatest(GET_GOAL_INIT, getGoalSaga)
    ])
}