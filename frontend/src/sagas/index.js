import {all} from 'redux-saga/effects'
import auth from './auth'
import weight from './weightSaga'
import calorie from './calorieSaga'
import goal from './goalSaga'
import workout from './workoutSaga'


export default function* IndexSagas () {
  yield all([
    auth(),
    weight(),
    calorie(),
    goal(),
    workout(),
  ])
}