const connection = require('../db/connection');

const getTasks = async () => {
  const tasks = await connection.execute('SELECT * FROM tasks') 
  return tasks;
}

const updateTask = async (newTask) => {
  const updateQuery = 'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?';
  const params = [newTask.title, newTask.description, newTask.status, newTask.id];
  connection.execute(updateQuery, params);
}

const deleteTask = async (code) => {
  const deleteQuery = 'DELETE FROM tasks WHERE id = ?';
  await connection.execute(deleteQuery, [code.id]);
}

const addTask = async (newTask) => {
  const insertQuery = 'INSERT INTO tasks (user_id, title, description, status) VALUES (?, ?, ?, ?)';
  const params = [newTask.userId, newTask.title, newTask.description, newTask.status];
  connection.execute(insertQuery, params);
}

module.exports = {
  getTasks,
  updateTask,
  deleteTask,
  addTask
};