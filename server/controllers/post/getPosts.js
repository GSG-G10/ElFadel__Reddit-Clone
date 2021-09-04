const { getAllPost } = require('../../database/queries');

module.exports = (req, res, next) => {
  getAllPost()
    .then(({ rows }) => res.status(200).json(rows))
    .catch((err) => next(err));
};
