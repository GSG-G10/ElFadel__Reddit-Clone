const {
  loginQuery,
  signUpQuery,
} = require('./relateAuth');
const {
  addPost,
  deletePost,
  getAllPost,
} = require('./relatePost');
const {
  addComment,
  deleteComment,
  getComment,
  updateComment,
} = require('./relateComments');
const getUser = require('./relateUser');

module.exports = {
  signUpQuery,
  loginQuery,
  addPost,
  deletePost,
  addComment,
  deleteComment,
  getComment,
  updateComment,
  getUser,
  getAllPost,
};
