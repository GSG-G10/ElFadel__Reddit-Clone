const {
  loginController, signUpController, logoutController, isAuth,
} = require('./auth');
const { getSubmit, postSubmit } = require('./submitCont');
const { deletePost } = require('./post');
const { getUserData } = require('./utils');
const {
  addComment, deleteComment, updateComment, getComments,
} = require('./comments');

module.exports = {
  signUpController,
  loginController,
  logoutController,
  getSubmit,
  postSubmit,
  isAuth,
  getUserData,
  deletePost,
  addComment,
  deleteComment,
  updateComment,
  getComments,
};
