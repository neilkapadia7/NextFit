import store from '../store'
import axios from 'axios'
import Moment from 'moment'

export const getGoal = async () => {
    try {
        var state = store.getState();
        const {user: {userInfo: {accessToken}}} = state

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        }
        const res = await axios.get('/api/goal', config);
        console.log('GET GOAL ::', res)
        return res.data

    } catch (err) {
        console.log(err)
    }
}

export const addGoal = async (goal) => {
    console.log('Goal Service :::', goal)
    const month = Moment().format('MMMM');
    const year = Moment().format('YYYY');

    const data = {
        goal,
        month,
        year
    }

    try {
        var state = store.getState();
        const {user: {userInfo: {accessToken}}} = state

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        }
    
        const res = await axios.post('/api/goal', data,  config )
    
        console.log('Goal Add Res :::', res)
        return res.data;
            
    } catch (err) {
        console.log(err)
    }
}