const {
  loginController, signUpController, logoutController, isAuth,
} = require('./auth');
const { getSubmit, postSubmit } = require('./submitCont');
const { deletePost } = require('./post');
const { getUserData } = require('./utils');

module.exports = {
  signUpController,
  loginController,
  logoutController,
  getSubmit,
  postSubmit,
  isAuth,
  getUserData,
  deletePost,
};
