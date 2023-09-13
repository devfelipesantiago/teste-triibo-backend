const taskModel = require('../models/tasksModel');

const getAllTasks = async () => {
  return await taskModel.getTasks();
};

const updateTask = async (newTask) => {
  await taskModel.updateTask(newTask);
};

const deleteTask = async (code) => {
  await tasksModel.deleteTask(code);
}

const addTask = async (newTask) => {
  await taskModel.addTask(newTask);
  return newTask;
}

module.exports = {
  getAllTasks,
  updateTask,
  deleteTask,
  addTask
};