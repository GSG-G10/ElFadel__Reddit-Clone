const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const cookies = req.cookies?.token;
  const decoded = jwt.decode(cookies);
  req.dataUser = decoded;
  next();
};
