const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const tasksControllers = require('../controllers/tasksControllers');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/login', usersControllers.login);
router.use(authMiddleware);

router.post('/users', usersControllers.addUser);
router.post('/tasks', tasksControllers.addTask);
router.get('/tasks', tasksControllers.getAllTasks);
router.get('/tasks/:id', tasksControllers.getTaskById);
router.put('/tasks/:id', tasksControllers.updateTask);
router.delete('/tasks/:id', tasksControllers.deleteTask);

module.exports = router;