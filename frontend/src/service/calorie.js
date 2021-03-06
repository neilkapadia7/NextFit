import store from '../store'
import axios from 'axios'

export const getCalorie = async () => {
    try {
        var state = store.getState();
        const {user: {userInfo: {accessToken}}} = state

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        }
        const res = await axios.get('/api/calorie', config);
        console.log('GET CALORIE ::', res)
        return res.data

    } catch (err) {
        console.log(err)
    }
}

export const addCalorie = async (data) => {
    console.log('Calorie Service :::', data)
    try {
        var state = store.getState();
        const {user: {userInfo: {accessToken}}} = state

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        }
    
        const res = await axios.post('/api/calorie', data,  config )
    
        console.log('Calorie Add Res :::', res)
        return res.data;
            
    } catch (err) {
        console.log(err)
    }
}