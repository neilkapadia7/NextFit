import {GOOGLE_SIGNIN, GET_GOOGLE_TOKENS, GOOGLE_SIGNIN_RESULT, USER_SIGNIN} from '../constants/authConstants'

export const userSignReducer = (state = {isLoggedIn: false, loading: false, error: null, token: null}, action) => {
    switch (action.type) {
        case GOOGLE_SIGNIN:
          return {
            ...state,
            loading: true,
            isLoggedIn: false,
            error: null
          }
        case GOOGLE_SIGNIN_RESULT:
          return {
            ...state,
            isLoggedIn: false,
            userData: action.payload,
            loading: true,
            error: null
          }
        case GET_GOOGLE_TOKENS:
          return {
            ...state,
            id_token: action.payload.id_token,
            refresh_token: action.payload.refresh_token,
            access_token: action.payload.access_token
          }
        case USER_SIGNIN: 
          return {
            ...state,
            loading: false,
            error: null,
            isLoggedIn: true,
            token: action.payload
          }
        default:
            return state;
    }
} 