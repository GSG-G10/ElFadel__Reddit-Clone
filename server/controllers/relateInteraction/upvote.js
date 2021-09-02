const { upVote } = require('../../database/queries');

module.exports = (req, res, next) => {
  const { id } = req.params;
  upVote(id)
    .then(() => res.status(302).json({ message: 'success upvote' }))
    .catch((err) => next(err));
};
