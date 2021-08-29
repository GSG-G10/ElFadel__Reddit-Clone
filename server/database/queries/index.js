const {
  loginQuery,
  signUpQuery,
} = require('./relateAuth');
const {
  addPost,
  deletePost,
} = require('./relatePost');
const {
  addComment,
  deleteComment,
  getComment,
  updateComment,
} = require('./relateComments');

module.exports = {
  signUpQuery,
  loginQuery,
  addPost,
  deletePost,
  addComment,
  deleteComment,
  getComment,
  updateComment,
};
