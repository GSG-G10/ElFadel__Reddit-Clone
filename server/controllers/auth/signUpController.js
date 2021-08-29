const { signUpQueries } = require('../../database/queries');
const { signUpValidate, hashPassword, buildToken } = require('../../utils');

module.exports = (req, res) => {
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
    signUpQueries(name, hash, email).then(() => {
      // build token
      buildToken({ name, email }, process.env.SECRET_KEY, (errJWT, token) => {
        if (errJWT) {
          return res.status(401).json({
            status: 401,
            error: 'UNAUTHORIZED',
          });
        }
        return res
          .cookie('access_token', token, {
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
