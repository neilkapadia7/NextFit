import { call, put, takeLatest, all, select} from 'redux-saga/effects'
import * as WeightService from '../service/weight'
import * as WeightActions from '../actions/weightActions'
import { ADD_WEIGHT_INIT } from '../constants/weightConstants'

export function* addWeightSaga (param) {
    try {
        const response = yield call(WeightService.addWeight, param);
        yield put(WeightActions.addWeight(response))
    } catch (err) {
        
    }

}

export default function* actionWatcher() {
    yield all([
        takeLatest(ADD_WEIGHT_INIT, addWeightSaga),
    ])
}