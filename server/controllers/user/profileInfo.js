const { getUser } = require('../../database/queries');

module.exports = (req, res, next) => {
  const { user } = req.params;
  getUser(user).then(({ rows }) => {
    res.json(rows);
  }).catch((err) => next(err));
};
