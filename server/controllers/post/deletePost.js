const { deletePost } = require('../../database/queries');

module.exports = (req, res, next) => {
  const { id: userId } = req.dataUser;
  const { id: postId } = req.params;
  deletePost(userId, postId).then(() => {
    console.log('Post deleted');
  });
};
