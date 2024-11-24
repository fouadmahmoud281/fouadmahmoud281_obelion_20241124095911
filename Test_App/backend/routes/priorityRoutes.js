const express = require('express');
const router = express.Router();
const priorityController = require('../controllers/priorityController');

router.get('/tasks', priorityController.getAllTasks);
router.get('/tasks/:id', priorityController.getTaskById);
router.post('/tasks', priorityController.createTask);
router.put('/tasks/:id', priorityController.updateTask);
router.delete('/tasks/:id', priorityController.deleteTask);

module.exports = router;