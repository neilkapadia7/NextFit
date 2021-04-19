import express from 'express';
import {protect} from '../middleware/authMiddleware.js'
import {
    getCalories,
    addCalories
} from '../controller/calorieController.js'

const router = express.Router();

// /api/calorie
router.get('/', protect, getCalories);
router.post('/', protect, addCalories);

export default router;