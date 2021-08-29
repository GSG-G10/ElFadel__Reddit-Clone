const connection = require('../connection');

module.exports = (name) => connection.query('SELECT * FROM users WHERE name = $1', [name]);
