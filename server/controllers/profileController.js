const { getUser } = require('../database/queries');

module.exports = (req, res, next) => {
  const { userName } = req.params;
  getUser(userName).then(({ rows }) => {
    res.status(200).json({
      data: rows,
    });
  })
    .catch((err) => next(err));
};
