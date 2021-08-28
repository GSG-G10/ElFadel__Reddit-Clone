const { hash, genSalt } = require('bcryptjs');

module.exports = (password, callback) => {
  genSalt(10, (err, salt) => {
    hash(password, salt, callback);
  });
};
