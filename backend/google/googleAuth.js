import {getTokens} from './getTokens.js'
import axios from 'axios';
import User from '../models/userModel.js'
import {sendRefreshToken} from '../auth/sendRefreshToken.js';
import {createAcessToken, createRefreshToken} from '../auth/createToken.js'

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

          res.json({googleToken: access_token});


        // const resp = await axios
        // .get(
        //     `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
        //     {
        //         headers: {
        //             Authorization: `Bearer ${id_token}`,
        //         },
        //     }
        // ); 

        // const user = await User.findOne({id: resp.data.id});
        
        // if(user) {
        //     console.log('User Login!!!!!')

        //     // Tokens
        //     await sendRefreshToken(res, createRefreshToken())

        //     res.redirect('http://localhost:3000/home').json({accessToken: createAcessToken(resp.data.id)});
        // }
        // else {
        //     console.log('New User!!!!!')
        //     const newUser = new User(resp.data);
        //     await newUser.save()
            
        //     console.log('Response Data : ', resp.data)

        //     // Tokens Logic
        //     await sendRefreshToken(res, createRefreshToken())
        //     res.json({accessToken: createAcessToken(resp.data.id)});
        // }

    } catch (error) {
        console.error(`Failed to fetch user`);
        throw new Error(error.message);
    }  
  }