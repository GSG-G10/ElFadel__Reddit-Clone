const { addPost } = require('../database/queries');

module.exports = (req, res) => {
  // -->getUserId
  const {
    title, content, isPrivate, id,
  } = req.body;
  addPost(title, content, id, isPrivate).then(() => {
    console.log('Post added');
  });
};
