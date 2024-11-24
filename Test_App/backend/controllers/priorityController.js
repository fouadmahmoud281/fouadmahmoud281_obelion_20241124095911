const Priority = require('../models/PriorityModel');

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Priority.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve tasks' });
  }
};

// Get a single task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Priority.findByPk(req.params.id);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve task' });
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const { name, dueDate, priority } = req.body;
    const newTask = await Priority.create({ name, dueDate, priority });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

// Update an existing task
exports.updateTask = async (req, res) => {
  try {
    const task = await Priority.findByPk(req.params.id);
    if (task) {
      const { name, dueDate, priority } = req.body;
      await task.update({ name, dueDate, priority });
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Priority.findByPk(req.params.id);
    if (task) {
      await task.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};