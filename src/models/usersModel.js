const connection = require('../db/connection');

const addUser = (name) => {
  const insertQuery = 'INSERT INTO users (name) VALUES ?)';
  const params = [name];
  
  connection.execute(insertQuery, params);
}

module.exports = addUser;