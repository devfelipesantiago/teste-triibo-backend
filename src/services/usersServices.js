const usersModel = require('../models/usersModel');

const addUser = async (user) => {
  const newUser = await usersModel.addUser(user);
  return newUser;
};

module.exports = {
  addUser,
};