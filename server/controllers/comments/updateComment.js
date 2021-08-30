const { updateComment } = require('../../database/queries');

module.exports = (req, res, next) => {
  const { newValue } = req.body;
  const { idComment } = req.params;
  updateComment(idComment, newValue).then(() => {
    res.status(200).json({
      msg: 'Comment updated',
    });
  }).catch((err) => next(err));
};
