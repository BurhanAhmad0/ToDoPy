import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { registerUser, loginUser, logoutUser, user } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/logout', logoutUser);
router.get('/user', authMiddleware, user);

export default router;
