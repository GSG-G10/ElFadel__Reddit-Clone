const { downVote } = require('../../database/queries');

module.exports = (req, res, next) => {
  const { id } = req.params;
  downVote(id)
    .then(() => res.status(302).json({ message: 'success downvoted' }))
    .catch((err) => next(err));
};
