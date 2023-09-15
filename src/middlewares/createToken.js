const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = async (userData) => {
  const secret = process.env.JWT_SECRET
  const token = jwt.sign(userData, secret, jwtConfig);

  return token;
};

module.exports = createToken;