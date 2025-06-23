import express from 'express';
import {authMiddleware} from '../middlewares/authMiddleware.js';
import { addEvent, getEvents } from '../controllers/eventController.js';

const router = express.Router();

router.post('/', authMiddleware, addEvent);
router.get('/', authMiddleware, getEvents);

export default router;
