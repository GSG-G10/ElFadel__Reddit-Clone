const connection = require('../../connection');

module.exports = (userName) => connection.query('SELECT * FROM users LEFT JOIN posts ON posts.user_id = users.id WHERE users.name = $1', [userName]);
