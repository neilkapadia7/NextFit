import express from 'express'
import {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile
} from '../controller/userController.js';
import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();

// api/users
router.post('/', registerUser );
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

export default router;