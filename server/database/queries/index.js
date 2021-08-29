const { loginQuery, signUpQuery } = require('./relateAuth');
const { addPost, deletePost } = require('./relatePost');

module.exports = {
  signUpQuery,
  loginQuery,
  addPost,
  deletePost,
};
