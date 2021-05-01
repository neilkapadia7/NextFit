import {GOOGLE_SIGNIN, GET_GOOGLE_TOKEN, GOOGLE_SIGNIN_RESULT, USER_SIGNIN} from '../constants/authConstants'

export const googleSignReducer = (state = {isLoggedIn: false}, action) => {
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
        case USER_SIGNIN: 
          return {
            ...state,
            loading: false,
            error: null,
            isLoggedIn: true,
          }
        default:
            return state;
    }
} 