const { join } = require('path');
const {
  loginQuery,
} = require('../../database/queries');
const { comparePassword, buildToken, signInValidate } = require('../../utils');

module.exports = (req, res) => {
  if (req.method === 'GET') {
    return res.status(302).sendFile(join(__dirname, '../../../public/views/login.html'));
  }
  const {
    email,
    password,
  } = req.body;
  loginQuery(email).then(({
    rows,
  }) => {
    if (rows[0]) {
      const {
        id,
        name,
        password: hashPassword,
      } = rows[0];
      const { error } = signInValidate(email, password);
      if (error) {
        res.cookie('message', error.details[0].message);
        return res.status(400);
      }
      comparePassword(password, hashPassword, (errCompare, isMatch) => {
        if (isMatch) {
          buildToken({ id, name, email }, process.env.SECRET_KEY, (err, token) => {
            res.cookie('token', token);
            res.status(200).redirect('/');
          });
        } else {
          res.cookie('message', 'Wrong password please try again ');
          res.redirect('/login');
        }
      });
    } else {
      res.cookie('message', 'email isn\'t exist');
      res.redirect('/login');
    }
  })
    .catch(() => {
      // query
      res.cookie('message', 'sth problem please try again ');
      res.redirect('/login');
    });
};
