const connection = require('../db/connection');

const addUser = async ({name, password}) => {
  const insertQuery = 'INSERT INTO users (name, password) VALUES (?, ?)';
  const params = [name, password];
  await connection.execute(insertQuery, params);
}

const getUserByName = async (name, password) => {
  const findQuery = 'SELECT * FROM users WHERE name = ? AND password = ?';
  const params = [name, password];

  const [user] = await connection.execute(findQuery, params);
  return user;
}

module.exports = {addUser, getUserByName};