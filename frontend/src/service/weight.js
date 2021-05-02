import store from '../store'
import axios from 'axios'

export const addWeight = async (data) => {
    try {
        var state = store.getState();
        const {user: {userInfo: {accessToken}}} = state

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        }
    
        const res = await axios.post('/api/weight', data,  config )
    
        console.log('Weight Add Res :::', res)
        return res.data;
            
    } catch (err) {
        console.log(err)
    }
}