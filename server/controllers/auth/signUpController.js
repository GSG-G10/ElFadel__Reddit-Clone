const { join } = require('path');
const { signUpQuery } = require('../../database/queries');
const { signUpValidate, hashPassword, buildToken } = require('../../utils');

module.exports = (req, res) => {
  if (req.method === 'GET') {
    return res.status(200).sendFile(join(__dirname, '../../../public/views/signUp.html'));
  }
  const { password, email, name } = req.body;
  const { error } = signUpValidate.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
  }
  // hash password
  hashPassword(password, (err, hash) => {
    // store database
    signUpQuery(name, hash, email).then(({ rows }) => {
      const { id } = rows[0];
      // build token
      buildToken({ id, name, email }, process.env.SECRET_KEY, (errJWT, token) => {
        if (errJWT) {
          return res.status(401).json({
            status: 401,
            error: 'UNAUTHORIZED',
          });
        }
        return res
          .cookie('token', token, {
            httpOnly: true,
          })
          .redirect('/');
      });
    }).catch((errorDatabaseConnection) => {
      // database error
      console.log(errorDatabaseConnection);
    });
  });
};
