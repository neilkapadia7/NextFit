import axios from 'axios'
import {getTokens} from './getTokens'

export const googleSignIn = async (code) => {
    
    const redirectURL = 'http://localhost:3000/redirect'

    try{
        const { id_token, access_token, refresh_token } = await getTokens({
            code,
            clientId: process.env.REACT_APP_GOOGLE_CLIENT,
            clientSecret: process.env.REACT_APP_GOOGLE_SECRET,
            redirectUri: redirectURL,
        });

        const res = await axios
        .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
            {
                headers: {
                    Authorization: `Bearer ${id_token}`,
                },
            }
        ); 


        console.log("RESPOSNE SERVICES ::: ", res)
        return {res, id_token, access_token, refresh_token };
    }
    catch(err) {
        console.log(`Failed to fetch user`);
        console.log(err);
    }
    
}

export const userSignIn = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        const res = await axios.post('/api/users/login', data,  config )
    
        console.log('Backend Res :::', res)
        return res.data.accessToken;
            
    } catch (err) {
        console.log(err)
    }
}