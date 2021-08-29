const {
  loginQuery,
} = require('../../database/queries');
const { comparePassword, buildToken } = require('../../utils');

module.exports = (req, res) => {
  const {
    email,
    password,
  } = req.body;
  loginQuery(email).then(({
    rows,
  }) => {
    if (rows[0]) {
      const {
        name,
        password: hashPassword,
      } = rows[0];
      comparePassword(password, hashPassword, (errCompare, isMatch) => {
        if (isMatch) {
          buildToken({ name, email }, process.env.SECRET_KEY, (err, token) => {
            res.cookie('token', token);
            res.status(302).redirect('back');
          });
        } else {
          res.status(401).json({
            message: 'Wrong password',
          });
        }
      });
    } else {
      res.status(401).json({
        message: 'Wrong email || you don\'t have email',
      });
    }
  })
    .catch(() => {
      // query
      res.cookie('sth problem, please try again :>');
      res.redirect('/login');
    });
};
