import {GOOGLE_SIGNIN, GET_GOOGLE_TOKENS, GOOGLE_SIGNIN_RESULT, USER_SIGNIN, GET_REFRESH_GOOGLE_TOKENS, REFRESH_GOOGLE_TOKENS_LOADING} from '../constants/authConstants'

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
            googleData: action.payload,
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
            userInfo: action.payload
          }
        case REFRESH_GOOGLE_TOKENS_LOADING:
          return {
            ...state,
            loading: true
          }
        case GET_REFRESH_GOOGLE_TOKENS:
          return {
            ...state,
            id_token: action.payload.id_token,
            access_token: action.payload.access_token,
            loading: false
          }
        default:
            return state;
    }
} 