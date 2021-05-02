import { ADD_WEIGHT, ADD_WEIGHT_INIT, GET_WEIGHT, GET_WEIGHT_INIT } from "../constants/weightConstants"

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

export const getWeightInit = () => {
    return {
        type: GET_WEIGHT_INIT
    }
}

export const getWeight = (payload) => {
    return {
        type: GET_WEIGHT,
        payload
    }
}