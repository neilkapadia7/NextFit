import {GOOGLE_SIGNIN, GET_GOOGLE_TOKENS, GOOGLE_SIGNIN_RESULT, USER_SIGNIN} from '../constants/authConstants'

export const userSignIn = (code) => {
    return {
        type: GOOGLE_SIGNIN,
        code
    }
}

export const googleSignInResult = (payload) => {
    return {
        type: GOOGLE_SIGNIN_RESULT,
        payload
    }
}

export const googleInfo = (payload) => {
    return {
        type: GET_GOOGLE_TOKENS,
        payload
    }
}

export const userSignInResult = (payload) => {
    localStorage.setItem('token', payload);

    return {
        type: USER_SIGNIN,
        payload
    }
}