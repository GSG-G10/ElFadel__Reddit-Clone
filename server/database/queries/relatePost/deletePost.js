const connection = require('../../connection');

module.exports = (userId, postId) => connection.query('DELETE FROM posts WHERE id = $1 AND user_id = $2  ', [postId, userId]);
