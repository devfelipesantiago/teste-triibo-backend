const connection = require('../db/connection');

const getAllMessages = async () => {
  const [messages] = await connection.execute('SELECT * FROM messages');
  return messages;
};

const updateMessage = async (newMessage, code) => {
  const updateMessageQuery = 'UPDATE messages SET ? WHERE code = ?';
    await connection.execute(updateMessageQuery, [newMessage, code]);
};

const getMessageByCode = async (code) => {
  const [[message]] = await connection.execute('SELECT * FROM messages WHERE code = ?', [code]);
  return message;
};

const addMessage = async (message) => {
  const insertQuery = 'INSERT INTO messages (message) VALUES (?)';
  await connection.execute(insertQuery, [message]);
};

const deleteMessage = async (code) => {
  const deleteQuery = 'DELETE FROM messages WHERE code = ?';
  await connection.execute(deleteQuery, [code]);
};

module.exports = {
  getAllMessages,
  updateMessage,
  getMessageByCode,
  addMessage,
  deleteMessage
};