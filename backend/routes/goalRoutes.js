import express from 'express';
import {
    addGoal,
    getGoal
} from '../controller/goalController.js'
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router();

// /api/goal
router.post('/', protect, addGoal);
router.get('/', protect, getGoal);

export default router;