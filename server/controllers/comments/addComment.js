const { addComment } = require('../../database/queries');

module.exports = (req, res, next) => {
  const { id: userId } = req.dataUser;
  const { comment, idPost } = req.body;
  //   addComment
  addComment(comment, idPost, userId).then(() => {
    res.status(201).json({
      msg: 'Comment added successfully',
    });
  }).catch((err) => next(err));
};
