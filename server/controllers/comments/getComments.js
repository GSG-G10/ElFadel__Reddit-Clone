const { getComment } = require('../../database/queries');
/// :userName/comments/:idPost
module.exports = (req, res, next) => {
  const { idPost } = req.params;
  getComment(idPost).then(({ rows }) => {
    res.status(200).json({
      comments: rows,
    });
  }).catch((err) => next(err));
};
