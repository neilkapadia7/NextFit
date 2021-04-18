import express from 'express';
import {protect} from '../middleware/authMiddleware.js'
import {
    getWeights,
    addWeight
} from '../controller/weightController.js'

const router = express.Router();

// /api/weight
router.get('/', protect, getWeights);
router.post('/', protect, addWeight);

export default router;