import {all} from 'redux-saga/effects'
import auth from './auth'
import weight from './weightSaga'
import calorie from './calorieSaga'


export default function* IndexSagas () {
  yield all([
    auth(),
    weight(),
    calorie()
  ])
}