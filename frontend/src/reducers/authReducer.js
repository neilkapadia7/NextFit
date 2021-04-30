import {GOOGLE_SIGNIN, GET_GOOGLE_TOKEN} from '../constants/authConstants'

export const googleSignReducer = (state = {isLoggedIn: false}, action) => {
    switch (action.type) {
        case GOOGLE_SIGNIN: 
            return {
                ...state,
                googleToken : action.payload
            }
        default:
            return state;
    }
} 