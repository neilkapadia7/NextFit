import {GOOGLE_SIGNIN, GET_GOOGLE_TOKEN, GOOGLE_SIGNIN_RESULT, USER_LOGIN} from '../constants/authConstants'

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
            isLoggedIn: true,
            googleData: action.payload,
            loading:false,
            error: false
          }
        case USER_LOGIN: 
          return {
            ...state,
            userData: null,
            accessToken: null
          }
        default:
            return state;
    }
} 