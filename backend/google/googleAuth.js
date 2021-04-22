import {getTokens} from './getTokens.js'
import axios from 'axios';

export const googleAuth = async (req, res) => {
    const code = req.query.code;
    console.log('Code : ', code);
  
    const { id_token, access_token } = await getTokens({
      code,
      clientId: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET,
      redirectUri: redirectURL,
    });

    console.log('ID Token : ',id_token, '  Access Token: ', access_token)
  
    // Fetch the user's profile with the access token and bearer
    await axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
        {
          headers: {
            Authorization: `Bearer ${id_token}`,
          },
        }
      )
      .then((res) => {
        console.log('Response Data : ', res.data)
        const token = jwt.sign({id: res.data.id}, process.env.JWT_SECRET, {expiresIn: '20d'});
        console.log('Signed JWT Token', token)
      })
      .catch((error) => {
        console.error(`Failed to fetch user`);
        throw new Error(error.message);
      });
  
    const __dirname = path.resolve()
    res.sendFile(path.resolve(__dirname, 'backend', 'views', 'loggedIn.html'))
  
  }