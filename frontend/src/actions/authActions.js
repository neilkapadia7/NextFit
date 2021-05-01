import {GOOGLE_SIGNIN, GET_GOOGLE_TOKEN, GOOGLE_SIGNIN_RESULT} from '../constants/authConstants'

export const userSignIn = (code) => {
    return {
        type: GOOGLE_SIGNIN,
        code
    }
}

export const userSignInResult = (payload) => {
    return {
        type: GOOGLE_SIGNIN_RESULT,
        payload
    }
}