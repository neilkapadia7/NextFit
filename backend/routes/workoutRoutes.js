import express from 'express';
import {protect} from '../middleware/authMiddleware.js'
import {
    addWorkout,
    getWorkouts
} from '../controller/workoutController.js'

const router = express.Router();

// /api/workout
router.post('/', protect, addWorkout);
router.get('/', protect, getWorkouts);

export default router;