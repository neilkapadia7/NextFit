import {getTokens} from './getTokens.js'
import axios from 'axios';
import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import path from 'path';

export const googleAuth = async (req, res) => {
    const redirectURL = 'http://localhost:5000/api/google'
    const code = req.query.code;
    console.log('Code : ', code);
  
    // Fetch the user's profile with the access token and bearer
    try {

        const { id_token, access_token } = await getTokens({
            code,
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

        const user = new User(resp.data);
        
        await user.save()
        
        console.log('Response Data : ', resp.data)
        const token = jwt.sign({id: resp.data.id}, process.env.JWT_SECRET, {expiresIn: '20d'});
        console.log('Signed JWT Token', token)

      const __dirname = path.resolve()
      res.sendFile(path.resolve(__dirname, 'backend', 'views', 'loggedIn.html'))

    } catch (error) {
        console.error(`Failed to fetch user`);
        throw new Error(error.message);
    }  
  }