import { ADD_GOAL, ADD_GOAL_INIT, GET_GOAL, GET_GOAL_INIT } from "../constants/goalConstants"


export const goalReducer = (state = {loading: false, error: null, goal: [], listLoading: false}, action) => {
    switch (action.type) {
        case ADD_GOAL_INIT:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ADD_GOAL:
            return {
                ...state,
                loading: false,
                error: null,
                goal: [...state.goal, action.payload]
            }
        case GET_GOAL_INIT:
            return {
                ...state,
                listLoading: true,
                error: null
            }
        case GET_GOAL:
            console.log('reducer Payload:::', action.payload)
            return {
                ...state,
                listLoading: false,
                error: null,
                goal: action.payload
            }
        default:
            return state;
    }
}