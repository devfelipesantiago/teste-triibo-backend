const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const tasksControllers = require('../controllers/tasksControllers');

router.post('/users', usersControllers.addUser);
router.get('/tasks', tasksControllers.getAllTasks);
router.post('/tasks', tasksControllers.addTask);
router.put('/tasks/:id', tasksControllers.updateTask);
router.delete('/tasks/:id', tasksControllers.deleteTask);
router.get('/tasks/:id', tasksControllers.getTaskById);

module.exports = router;