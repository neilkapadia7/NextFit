import { ADD_WEIGHT, ADD_WEIGHT_INIT } from "../constants/weightConstants"

export const addWeightInit = (weight) => {
    return {
        type: ADD_WEIGHT_INIT,
        weight
    }
}

export const addWeight = (weight) => {
    return {
        type: ADD_WEIGHT,
        weight
    }
}