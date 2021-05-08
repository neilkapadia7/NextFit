import { ADD_GOAL, ADD_GOAL_INIT, GET_GOAL, GET_GOAL_INIT } from "../constants/goalConstants"

export const addGoalInit = (payload) => {
    console.log('Calorie Action', payload)
    return {
        type: ADD_GOAL_INIT,
        payload
    }
}

export const addGoal = (payload) => {
    return {
        type: ADD_GOAL,
        payload
    }
}

export const getGoalInit = () => {
    return{
        type: GET_GOAL_INIT
    }    
}

export const getGoal = (payload) => {
    return{
        type: GET_GOAL,
        payload
    }    
}