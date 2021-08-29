const signUpValidate = require('./validation/signUpValidate');
const hashPassword = require('./hashPassword');
const buildToken = require('./buildToken');
const comparePassword = require('./comparePassword');

module.exports = {
  signUpValidate,
  hashPassword,
  buildToken,
  comparePassword,
};
