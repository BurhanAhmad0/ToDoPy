import express from 'express';
import {authMiddleware} from '../middlewares/authMiddleware.js';
import { addTodo, getTodos, updateTodo, deleteTodo, updateTodoStatus } from '../controllers/todoController.js';

const router = express.Router();

router.post('/', authMiddleware, addTodo);
router.put('/:id', authMiddleware, updateTodo);
router.put('/status/:id', authMiddleware, updateTodoStatus);
router.delete('/:id', authMiddleware, deleteTodo);
router.get('/', authMiddleware, getTodos);

export default router;
