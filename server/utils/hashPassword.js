const { hash } = require('bcryptjs');

module.exports = (password, callback) => hash(password, 10, callback);
