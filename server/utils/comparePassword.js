const { compare } = require('bcryptjs');

module.exports = (password, hashedPassword, cb) => {
  compare(password, hashedPassword, (err, res) => {
    if (err) cb(err);
    else cb(null, res);
  });
};
