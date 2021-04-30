import { call, put, takeLatest, all, select} from 'redux-saga/effects'
import {GET_GOOGLE_TOKEN, GOOGLE_SIGNIN} from '../constants/authConstants'
import * as AuthService from '../service/auth'

export function* userSignInSaga() {
    try {
        const response = yield call(AuthService.userSignIn);
        if (response.status === 200) {
          if (response.data.status === true){
        //   localStorage.setItem('utoken', response.data.data.token)
        //   payload = {
        //     status: true,
        //     message: 'Success'
        //   }
            console.log('Saga Working ::', response.data)
        }
      }
      
    //   if (!payload.status){
    //       payload = {
    //         ...payload,
    //         message: response.data.message
    //       }
    //     }
    
        // yield put(authAction.userSignInResult({...payload}))
    
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