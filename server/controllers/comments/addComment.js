const { addComment, getComment } = require('../../database/queries');
// :userNameComment/comment/:idPost
module.exports = (req, res, next) => {
  const { id: userId } = req.dataUser;
  const { comment, idPost } = req.body;
  //   addComment
  addComment(comment, idPost, userId)
    .then(() => {
      getComment(idPost)
        .then((comments) => {
          res.status(200).json({ comments });
        })
        .catch((err) => {
          res.status(500).json({ err });
        });
    })
    .catch((err) => next(err));
};
