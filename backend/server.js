import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/db.js"
import crypto from 'crypto';
import userRoutes from "./routes/userRoutes.js";
import weightRoutes from "./routes/weightRoutes.js";
import goalRoutes from "./routes/goalRoutes.js";
import workoutRoutes from "./routes/workoutRoutes.js";
import calorieRoutes from "./routes/calorieRoutes.js";

dotenv.config()

const app = express();
connectDB();

app.use(express.json())

app.use('/api/users', userRoutes);
app.use('/api/weight', weightRoutes);
app.use('/api/goal', goalRoutes);
app.use('/api/workout', workoutRoutes);
app.use('/api/calorie', calorieRoutes);

// Generating Random Hash
// var current_date = (new Date()).valueOf().toString();
// var random = Math.random().toString();
// console.log(crypto.createHash('sha1').update(current_date + random).digest('hex'));

const PORT = process.env.PORT || 5000 

app.listen(PORT, () => console.log(`Server Running on Port Number : ${PORT}`))