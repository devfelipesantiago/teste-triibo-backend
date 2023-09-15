const usersModel = require('../models/usersModel');
const createToken = require('../middlewares/createToken');

const addUser = async (user) => {
  const newUser = await usersModel.addUser(user);
  return newUser;
};

const login = async (names, passwords) => {
  const [{name, password}] = await usersModel.getUserByName(names, passwords);

  const jwtPayload = {
    name,
    password
  }

  const token = await createToken(jwtPayload);
  return {name, token}
}

module.exports = {
  addUser,
  login,
};