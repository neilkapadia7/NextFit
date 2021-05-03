import { ADD_CALORIE, ADD_CALORIE_INIT, GET_CALORIE, GET_CALORIE_INIT } from "../constants/calorieConstants"


export const calorieReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_CALORIE_INIT:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ADD_CALORIE:
            return {
                ...state,
                loading: false,
                error: null,
                calories: action.payload.calorieData
            }
        case GET_CALORIE_INIT:
            return {
                ...state,
                listLoading: true,
                error: null
            }
        case GET_CALORIE:
            return {
                ...state,
                listLoading: false,
                error: null,
                calories: action.payload.calorieData
            }
        default:
            return state;
    }
}