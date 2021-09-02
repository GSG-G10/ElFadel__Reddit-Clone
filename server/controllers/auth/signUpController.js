const { join } = require('path');
const { signUpQuery } = require('../../database/queries');
const { signUpValidate, hashPassword, buildToken } = require('../../utils');

module.exports = (req, res) => {
  if (req.method === 'GET') {
    return res.status(302).sendFile(join(__dirname, '../../../public/views/signUp.html'));
  }
  const { password, email, name } = req.body;
  const { error } = signUpValidate.validate(req.body);
  if (error) {
    res.cookie('message', error.details[0].message);
    return res.redirect('/signUp');
  }
  // hash password
  hashPassword(password, (err, hash) => {
    // store database
    signUpQuery(name, hash, email).then(({ rows }) => {
      const { id } = rows[0];
      // build token
      buildToken({ id, name, email }, process.env.SECRET_KEY, (errJWT, token) => {
        if (errJWT) {
          res.cookie('message', 'something wrong please try again');
          return res.redirect('/signUp');
        }
        return res
          .cookie('token', token, {
            httpOnly: true,
          })
          .redirect('/');
      });
    }).catch(() => {
      // database error
      res.cookie('message', 'hmmm This email or your Name is exist please change it ');
      return res.redirect('/signUp');
    });
  });
};
