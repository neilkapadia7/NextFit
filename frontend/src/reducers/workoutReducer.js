import { ADD_WORKOUT, ADD_WORKOUT_INIT, GET_WORKOUT, GET_WORKOUT_INIT } from "../constants/workoutConstants"


export const workoutReducer = (state = {loading: false, error: null, workout: [], listLoading: false}, action) => {
    switch (action.type) {
        case ADD_WORKOUT_INIT:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ADD_WORKOUT:
            return {
                ...state,
                loading: false,
                error: null,
                workout: [...state.workout, action.payload]
            }
        case GET_WORKOUT_INIT:
            return {
                ...state,
                listLoading: true,
                error: null
            }
        case GET_WORKOUT:
            console.log('reducer Payload:::', action.payload)
            return {
                ...state,
                listLoading: false,
                error: null,
                workout: action.payload
            }
        default:
            return state;
    }
}