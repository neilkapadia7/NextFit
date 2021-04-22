import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/db.js"
import crypto from 'crypto';
import userRoutes from "./routes/userRoutes.js";
import weightRoutes from "./routes/weightRoutes.js";
import goalRoutes from "./routes/goalRoutes.js";
import workoutRoutes from "./routes/workoutRoutes.js";
import calorieRoutes from "./routes/calorieRoutes.js";
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth';
import path from 'path';
import {google} from 'googleapis';
import querystring from "querystring";
import axios from 'axios';
import {getTokens} from './getTokens.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import jwt from 'jsonwebtoken'

dotenv.config()

const app = express();
connectDB();

app.use(express.json())

const redirectURL = 'http://localhost:5000/api/google'

app.use(cookieParser());

app.use(
  cors({
    // Sets Access-Control-Allow-Origin to the UI URI
    origin: 'http://localhost:5000',
    // Sets Access-Control-Allow-Credentials to true
    credentials: true,
  })
);

function getGoogleAuthURL() {
  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
  const options = {
    redirect_uri: redirectURL,
    client_id: process.env.GOOGLE_CLIENT,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/fitness.activity.read',
      'https://www.googleapis.com/auth/fitness.activity.write',
      'https://www.googleapis.com/auth/fitness.blood_pressure.read',
      'https://www.googleapis.com/auth/fitness.heart_rate.read'
    ].join(" ")
  };

  return `${rootUrl}?${querystring.stringify(options)}`
  

  // return oauth2Client.generateAuthUrl({
  //   access_type: 'offline',
  //   prompt: 'consent',
  //   scope: scopes, // If you only need one scope you can pass it as string
  // });
}

app.get('/auth/google/url', (req, res) => {
  return res.redirect(getGoogleAuthURL());
})


app.get('/api/google', async (req, res) => {
  const code = req.query.code;

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
      const token = jwt.sign(res.data, process.env.JWT_SECRET, {expiresIn: '20d'});
      console.log('Signed JWT Token', token)
    })
    .catch((error) => {
      console.error(`Failed to fetch user`);
      throw new Error(error.message);
    });

  // res.cookie(COOKIE_NAME, token, {
  //   maxAge: 900000,
  //   httpOnly: true,
  //   secure: false,
  // });

  const __dirname = path.resolve()
  res.sendFile(path.resolve(__dirname, 'backend', 'views', 'loggedIn.html'))

})

// GET CURRENT LOGGED IN USER
// app.get('/auth/me', async (req, res) => {
//   try {
//     const decoded = jwt.verify(req.cookies[COOKIE_NAME], process.env.JWT_SECRET)

//     res.send(decoded);
//   } catch (err) {
//     res.send(null)
//   }
// })



/**
 * @description Passport JS
 */

// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });
  
//   passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//       done(err, user);
//     });
//   });

// passport.use(new GoogleStrategy.OAuthStrategy({
//     consumerKey: process.env.GOOGLE_CLIENT,
//     consumerSecret: process.env.GOOGLE_SECRET,
//     callbackURL: "http://localhost:5000/api/google"
//   },
//   function(accessToken, refreshToken, profile, done) {
//        User.findOrCreate({ googleId: profile.id }, function (err, user) {
//          return done(null, user, profile);
//        });
//   }
// ));

// app.get('/good', (req, res) => res.send('Well Done'))
// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// app.get('/api/google', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/good');
//   });


app.use('/api/users', userRoutes);
app.use('/api/weight', weightRoutes);
app.use('/api/goal', goalRoutes);
app.use('/api/workout', workoutRoutes);
app.use('/api/calorie', calorieRoutes);

const __dirname = path.resolve()
app.get('/', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'backend', 'views', 'index.html'))
)


// Generating Random Hash
// var current_date = (new Date()).valueOf().toString();
// var random = Math.random().toString();
// console.log(crypto.createHash('sha1').update(current_date + random).digest('hex'));

const PORT = process.env.PORT || 5000 

app.listen(PORT, () => console.log(`Server Running on Port Number : ${PORT}`))