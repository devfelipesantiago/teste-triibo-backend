const tasksServices = require('../services/tasksServices');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await tasksServices.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

const getTaskById = async (req, res) => {
  try {
    const task = await tasksServices.getUserById(req.params.id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

const updateTask = async (req, res) => {
  try {
    const {id} = req.params.id; 
    const {title, description, status} = req.body;
    const newTask = {
      id,
      title,
      description,
      status
    }

    const task = await tasksServices.updateTask(newTask);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

const deleteTask = async (req, res) => {
  try {
    const task = await tasksServices.deleteTask(req.params.id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

const addTask = (req, res) => {
  try {
    const {userId, title, description, status} = req.body;
    const newTask = {
      userId,
      title,
      description,
      status
    }

    const task = tasksServices.addTask(newTask);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
  addTask
}