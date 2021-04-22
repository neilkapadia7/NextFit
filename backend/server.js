import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js";
import weightRoutes from "./routes/weightRoutes.js";
import goalRoutes from "./routes/goalRoutes.js";
import workoutRoutes from "./routes/workoutRoutes.js";
import calorieRoutes from "./routes/calorieRoutes.js";
import {googleAuth} from './google/googleAuth.js'
import path from 'path';
import querystring from "querystring";
import cookieParser from 'cookie-parser';
import cors from 'cors'

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

app.get('/auth/google/url', (req, res) => {
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

  return res.redirect(`${rootUrl}?${querystring.stringify(options)}`)
})


app.get('/api/google', googleAuth);

// GET CURRENT LOGGED IN USER
// app.get('/auth/me', async (req, res) => {
//   try {
//     const decoded = jwt.verify(req.cookies[COOKIE_NAME], process.env.JWT_SECRET)

//     res.send(decoded);
//   } catch (err) {
//     res.send(null)
//   }
// })




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