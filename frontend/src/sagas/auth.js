import { call, put, takeLatest, all, select} from 'redux-saga/effects'
import {GET_GOOGLE_TOKEN, GOOGLE_SIGNIN} from '../constants/authConstants'
import * as AuthService from '../service/auth'
import * as AuthActions from '../actions/authActions'

export function* userSignInSaga(param) {

    let payload = {
      status:false,
      message: 'Could not fetch data'
    }

    try {
        const response = yield call(AuthService.googleSignIn, param.code);
        // if(response) {
          console.log('Response SAGA:::', response)
        // }

        yield put(AuthActions.googleSignInResult(response.data))

        const token = yield call(AuthService.userSignIn, response.data);

        yield put(AuthActions.userSignInResult(token))
    
      } catch (error) {
          console.log(error)
        // yield put(authAction.userSignInResult({...payload}))
      }
}

export default function* actionWatcher() {
    yield all([
        takeLatest(GOOGLE_SIGNIN, userSignInSaga)
    ])
}