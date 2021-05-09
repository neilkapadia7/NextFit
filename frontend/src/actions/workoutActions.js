import { ADD_WORKOUT, ADD_WORKOUT_INIT, GET_WORKOUT, GET_WORKOUT_INIT } from "../constants/workoutConstants"

export const addWorkoutInit = (payload) => {
    console.log('Calorie Action', payload)
    return {
        type: ADD_WORKOUT_INIT,
        payload
    }
}

export const addWorkout = (payload) => {
    return {
        type: ADD_WORKOUT,
        payload
    }
}

export const getWorkoutInit = () => {
    return{
        type: GET_WORKOUT_INIT
    }    
}

export const getWorkout = (payload) => {
    return{
        type: GET_WORKOUT,
        payload
    }    
}