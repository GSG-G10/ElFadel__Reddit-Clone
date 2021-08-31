const { getAllPost, numberComments } = require('../../database/queries');

module.exports = (req, res, next) => {
  getAllPost()
    .then((posts) => res.status(200).json(posts))
    .catch((err) => next(err));
};
