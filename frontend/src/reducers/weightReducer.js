import { ADD_WEIGHT, ADD_WEIGHT_INIT } from "../constants/weightConstants";

export const weightReducer = (state = { weights: []}, action) => {
    switch(action.payload) {
        case ADD_WEIGHT_INIT:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ADD_WEIGHT:
            return {
                ...state,
                loading: false,
                error: null,
                weights: [...state.weights, action.payload]
            }
        default:
            return state;
    }
}