const {
  loginController, signUpController, logoutController, isAuth,
} = require('./auth');
const { getSubmit, postSubmit } = require('./submitCont');
const { deletePost, getPosts } = require('./post');
const {
  addComment, deleteComment, updateComment, getComments,
} = require('./comments');
const { profilePage, profileInfo, sendDataUser } = require('./user');
const { upvote, downvote } = require('./relateInteraction');
const { clientError, serverError } = require('./errors');

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
  sendDataUser,
  upvote,
  downvote,
  clientError,
  serverError,
};
