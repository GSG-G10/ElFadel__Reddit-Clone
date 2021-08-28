const { signUpQueries } = require('../database/queries');
const { signUpValidate, hashPassword } = require('../utils');

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
      console.log('success');
    }).catch((e) => {
      console.log(e);
    });
  });
};
