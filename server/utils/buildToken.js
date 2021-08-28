const { sign } = require('jsonwebtoken');

module.exports = (payload, secret, cb) => {
  sign(payload, secret, { expiresIn: '24h' }, (err, token) => {
    if (err) {
      return cb(err);
    }
    return cb(null, token);
  });
};
