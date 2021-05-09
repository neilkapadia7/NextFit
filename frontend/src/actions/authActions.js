import {GOOGLE_SIGNIN, GET_GOOGLE_TOKENS, GOOGLE_SIGNIN_RESULT, USER_SIGNIN, GET_REFRESH_GOOGLE_TOKENS, REFRESH_GOOGLE_TOKENS_LOADING, USER_LOGOUT} from '../constants/authConstants'

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
    localStorage.setItem('refresh', payload.refresh_token);
    return {
        type: GET_GOOGLE_TOKENS,
        payload
    }
}

export const userSignInResult = (payload) => {
    localStorage.setItem('userInfo', JSON.stringify(payload));

    return {
        type: USER_SIGNIN,
        payload
    }
}

export const googleRefreshTokenLoading = () => {
    return {
        type:  REFRESH_GOOGLE_TOKENS_LOADING
    }
}

export const googleRefreshToken = (payload) => {
    return {
        type:  GET_REFRESH_GOOGLE_TOKENS,
        payload
    }
}

export const logout = () => {
    return {
        type: USER_LOGOUT,
    }
}