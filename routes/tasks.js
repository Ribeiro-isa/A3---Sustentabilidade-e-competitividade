import express from 'express';
import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
} from '../controllers/tasksController.js';

import validateTask from '../utils/validateTask.js';

const router = express.Router();

router.get('/', getAllTasks);
router.post('/', validateTask, createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
