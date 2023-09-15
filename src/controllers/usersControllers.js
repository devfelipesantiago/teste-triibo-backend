const usersServices = require('../services/usersServices');

const addUser = async (req, res) => {
  
    const {name, password} = req.body;
    const newUser = await usersServices.addUser(name, password);
    res.status(201).json(newUser);  
}

const login = async (req, res) => {
  const { name, password } = req.body;
  const data = await usersServices.login(name, password);
  console.log(data);
  
  res.status(200).json('success');
}

module.exports = {
  addUser,
  login,
}