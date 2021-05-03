import { ADD_CALORIE, ADD_CALORIE_INIT } from "../constants/calorieConstants"

export const addCalorieInit = (payload) => {
    console.log('Calorie Action', payload)
    return {
        type: ADD_CALORIE_INIT,
        payload
    }
}

export const addCalorie = (payload) => {
    return {
        type: ADD_CALORIE,
        payload
    }
}