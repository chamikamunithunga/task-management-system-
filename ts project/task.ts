import { Router } from 'express';
import { getTasks, getTaskById, createTask, updateTask, deleteTask } from '../controllers/tasksController';

const router = Router();

router.get('/tasks', (req, res) => {
  res.json(getTasks());
});

router.get('/tasks/:id', (req, res) => {
  const task = getTaskById(parseInt(req.params.id));
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

router.post('/tasks', (req, res) => {
  const { title, description, completed } = req.body;
  const task = createTask({ id: 0, title, description, completed });
  res.status(201).json(task);
});

router.put('/tasks/:id', (req, res) => {
  const task = updateTask(parseInt(req.params.id), req.body);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

router.delete('/tasks/:id', (req, res) => {
  const success = deleteTask(parseInt(req.params.id));
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

export default router;
