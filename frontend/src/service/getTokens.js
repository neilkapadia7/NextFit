import axios from 'axios'
import querystring from 'querystring'

export const getTokens = ({
    code,
    clientId,
    clientSecret,
    redirectUri
    }) => {

        const url = "https://oauth2.googleapis.com/token";
        const values = {
            code,
            client_id: clientId,
            client_secret: clientSecret,
            redirect_uri: redirectUri,
            grant_type: "authorization_code",
        };
    
        return axios
        .post(url, querystring.stringify(values), {
            headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            },
        })
        .then((res) =>{ 
            console.log('res')
            return res.data
        })
        .catch((error) => {
            console.error(`Failed to fetch auth tokens`);
            throw new Error(error.message);
        });
}
