import store from '../store'
import axios from 'axios'
import Moment from 'moment'

export const getWorkout = async () => {
    try {
        var state = store.getState();
        const {user: {userInfo: {accessToken}}} = state

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        }
        const res = await axios.get('/api/workout', config);
        console.log('GET Workout ::', res)
        return res.data

    } catch (err) {
        console.log(err)
    }
}

export const addWorkout = async (data) => {
    try {
        var state = store.getState();
        const {user: {userInfo: {accessToken}}} = state

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        }
    
        const res = await axios.post('/api/workout', data,  config )
    
        console.log('Workout Add Res :::', res)
        return res.data;
            
    } catch (err) {
        console.log(err)
    }
}