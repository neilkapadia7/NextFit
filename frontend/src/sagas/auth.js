import { call, put, takeLatest, all, select} from 'redux-saga/effects'
import {GOOGLE_SIGNIN, REFRESH_GOOGLE_TOKENS} from '../constants/authConstants'
import * as AuthService from '../service/auth'
import * as AuthActions from '../actions/authActions'

export function* userSignInSaga(param) {

    let payload = {
      status:false,
      message: 'Could not fetch data'
    }

    try {
        const response = yield call(AuthService.googleSignIn, param.code);
        
        if(response) {
          console.log('Response SAGA:::', response)

          yield put(AuthActions.googleSignInResult(response.res.data))

          yield put(
            AuthActions.googleInfo(
              { 
                id_token: response.id_token, 
                refresh_token : response.refresh_token,
                access_token : response.access_token
              }
            ))

          const userInfo = yield call(AuthService.userSignIn, response.res.data);

          yield put(AuthActions.userSignInResult(userInfo))
        }
        
    
      } catch (error) {
          console.log(error)
        // yield put(authAction.userSignInResult({...payload}))
      }
}

export function* googleRefreshToken () {
  try {
    yield put(AuthActions.googleRefreshTokenLoading())

    const res = yield call(AuthService.googleRefreshToken())

    if(res) {
      yield put(AuthActions.googleRefreshToken(res))
    }

  } catch (error) {
    console.log(error)
  }
}

export default function* actionWatcher() {
    yield all([
        takeLatest(GOOGLE_SIGNIN, userSignInSaga),
        takeLatest(REFRESH_GOOGLE_TOKENS, googleRefreshToken)
    ])
}