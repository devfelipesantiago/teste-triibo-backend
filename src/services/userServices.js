const usersModel = require('../models/usersModel');

export const addUser = async (user) => {
  const user = await usersModel.addUser(user);
  return user;
};