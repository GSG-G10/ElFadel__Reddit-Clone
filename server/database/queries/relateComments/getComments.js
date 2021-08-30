const connection = require('../../connection');

module.exports = (postId) => connection.query('SELECT * FROM comments INNER JOIN users ON comments.user_id = users.id WHERE comments.post_id = $1', [postId]);
