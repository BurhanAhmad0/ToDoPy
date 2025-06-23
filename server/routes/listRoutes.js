import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { addList, getLists, getListById } from '../controllers/listControllers.js';

const router = express.Router();

router.post('/', authMiddleware, addList);
router.get('/', authMiddleware, getLists);
router.get('/:id', authMiddleware, getListById);

export default router;
