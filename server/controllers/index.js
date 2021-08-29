const { loginController, signUpController, logoutController } = require('./auth');
const getSubmit = require('./getSubmit');
const postSubmit = require('./postSubmit');

module.exports = {
  signUpController,
  loginController,
  logoutController,
  getSubmit,
  postSubmit,
};
