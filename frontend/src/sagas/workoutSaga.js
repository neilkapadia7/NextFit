import { call, put, takeLatest, all, select} from 'redux-saga/effects'
import { ADD_WORKOUT_INIT, GET_WORKOUT_INIT } from '../constants/workoutConstants'
import * as workoutServices from '../service/workoutService'
import * as workoutActions from '../actions/workoutActions'

export function* addWorkoutSaga(param) {
    try {
        console.log('Calorie Saga')
        const response = yield call(workoutServices.addWorkout, param.payload);
        if(response) {
            yield put(workoutActions.addWorkout(response));
        }
    } catch (err) {
        console.log(err);
    }
}

export function* getWorkoutSaga() {
    try {
        const response = yield call(workoutServices.getWorkout);
        if(response) {
            yield put(workoutActions.getWorkout(response))
        }    
        } catch (err) {
            console.log(err);
        }
}

export default function* actionWatcher() {
    yield all([
        takeLatest(ADD_WORKOUT_INIT, addWorkoutSaga),
        takeLatest(GET_WORKOUT_INIT, getWorkoutSaga)
    ])
}