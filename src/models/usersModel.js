const connection = require('../db/connection');

export const addUser = (user) => {
  const insertQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  const params = [user.name, user.email, user.password];
  
  connection.execute(insertQuery, params);
}