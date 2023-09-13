const usersServices = require('../services/usersServices');

const addUser = async (req, res) => {
  try {
    const {name} = req.body;
    const newUser = await usersServices.addUser(name);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  addUser
}