const { deleteComment } = require('../../database/queries');

module.exports = (req, res, next) => {
  const { idComment } = req.params;
  deleteComment(idComment).then(() => {
    res.status.json({
      msg: 'Comment deleted successfully',
    });
  }).catch((err) => next(err));
};
