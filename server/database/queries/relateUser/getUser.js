const connection = require('../../connection');

module.exports = (userName) => connection.query('SELECT * FROM users INNER JOIN posts ON posts.user_id=users.id WHERE name = $1', [userName]);
