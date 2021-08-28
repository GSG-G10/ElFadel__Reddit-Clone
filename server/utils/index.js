const signUpValidate = require('./validation/signUpValidate');
const hashPassword = require('./hashPassword');
const buildToken = require('./buildToken');

module.exports = {
  signUpValidate,
  hashPassword,
  buildToken,
};
