const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization){ 
    return res.status(401).json({
    'message': 'Authentication failed',
  }); 
  }

  try {
    const decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
    console.log(decoded); 
    next(); 
  } catch (error) {
    console.error(error);
    return res.status(401).end();
  }
}

module.exports = authMiddleware;