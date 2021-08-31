const {
  loginController, signUpController, logoutController, isAuth,
} = require('./auth');
const { getSubmit, postSubmit } = require('./submitCont');
const { deletePost, getPosts } = require('./post');
const {
  addComment, deleteComment, updateComment, getComments,
} = require('./comments');
const { profilePage, profileInfo } = require('./profile');

module.exports = {
  signUpController,
  loginController,
  logoutController,
  getSubmit,
  postSubmit,
  isAuth,
  deletePost,
  addComment,
  deleteComment,
  updateComment,
  getComments,
  profilePage,
  profileInfo,
  getPosts,
};
