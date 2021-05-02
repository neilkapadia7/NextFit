import { ADD_WEIGHT, ADD_WEIGHT_INIT } from "../constants/weightConstants"

export const addWeightInit = (payload) => {
    return {
        type: ADD_WEIGHT_INIT,
        payload
    }
}

export const addWeight = (payload) => {
    return {
        type: ADD_WEIGHT,
        payload
    }
}