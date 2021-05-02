import { ADD_WEIGHT, ADD_WEIGHT_INIT, GET_WEIGHT, GET_WEIGHT_INIT } from "../constants/weightConstants";

export const weightReducer = (state = {loading: false, error: null, weights: []}, action) => {
    switch (action.type) {
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
                weights: action.payload.weightData
            }
        case GET_WEIGHT_INIT:
            return {
                ...state,
                listLoading: true,
                error: null
            }
        case GET_WEIGHT:
            return {
                ...state,
                listLoading: false,
                error: null,
                weights: action.payload.weightData
            }
        default:
            return state;
    }
}