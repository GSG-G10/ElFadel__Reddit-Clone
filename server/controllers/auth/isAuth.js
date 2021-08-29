const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // yes ==> next
  // not ==> /login
  const token = req.cookies;
  if (token.token) {
    jwt.verify(token.token, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        return next(err);
      }
      return next();
    });
  } else {
    res.redirect('/login');
  }
};
