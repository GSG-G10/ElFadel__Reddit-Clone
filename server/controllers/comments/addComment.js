const { addComment } = require('../../database/queries');

module.exports = (req, res, next) => {
  const { id: userId } = req.dataUser;
  const { comment, idPost } = req.body;
  //   addComment
  addComment(comment, idPost, userId).then(() => {
    res.status(200).redirect('back');
  }).catch((err) => next(err));
};
