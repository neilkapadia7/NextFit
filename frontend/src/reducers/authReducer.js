import {GOOGLE_SIGNIN, GET_GOOGLE_TOKEN, GOOGLE_SIGNIN_RESULT} from '../constants/authConstants'

export const googleSignReducer = (state = {isLoggedIn: false}, action) => {
    switch (action.type) {
        case GOOGLE_SIGNIN:
          return {
            ...state,
            loading: true,
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
        default:
            return state;
    }
} 