import { call, put, takeLatest, all, select} from 'redux-saga/effects'
import * as WeightService from '../service/weight'
import * as WeightActions from '../actions/weightActions'
import { ADD_WEIGHT_INIT, GET_WEIGHT_INIT } from '../constants/weightConstants'

export function* getWeightSaga () {
    try {
        const response = yield call(WeightService.getWeight);
        if(response) {
            yield put(WeightActions.getWeight(response))
        }
    } catch (err) {
        console.log(err);
    }
}

export function* addWeightSaga (param) {
    try {
        const response = yield call(WeightService.addWeight, param.payload);
        if(response){
            yield put(WeightActions.addWeight(response))
        }
        
    } catch (err) {
        console.log(err);
    }

}

export default function* actionWatcher() {
    yield all([
        takeLatest(ADD_WEIGHT_INIT, addWeightSaga),
        takeLatest(GET_WEIGHT_INIT, getWeightSaga)
    ])
}