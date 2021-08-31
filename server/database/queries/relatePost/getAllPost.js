const connection = require('../../connection');

module.exports = () => connection.query('SELECT * FROM users INNER JOIN posts ON posts.user_id = users.id ORDER BY votes DESC');
