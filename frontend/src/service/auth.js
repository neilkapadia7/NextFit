import axios from 'axios'
import {getTokens} from './getTokens'

export const userSignIn = async (payload) => {
    
    const redirectURL = 'http://localhost:3000/home'
    // const code = req.query.code;

    try{
        const { id_token, access_token } = await getTokens({
            // code,
            clientId: process.env.GOOGLE_CLIENT,
            clientSecret: process.env.GOOGLE_SECRET,
            redirectUri: redirectURL,
        });
    
        console.log('ID Token : ',id_token, '  Access Token: ', access_token)

        const resp = await axios
        .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
            {
                headers: {
                    Authorization: `Bearer ${id_token}`,
                },
            }
        ); 

        console.log(resp)
    }
    catch(err) {
        console.log(`Failed to fetch user`);
        console.log(err);
    }
    
}

