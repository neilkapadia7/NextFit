import {all} from 'redux-saga/effects'
import auth from './auth'
import weight from './weightSaga'


export default function* IndexSagas () {
  yield all([
    auth(),
    weight()
  ])
}