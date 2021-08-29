const connection = require('../../connection');

module.exports = (userId, postId, commentId) => connection.query('DELETE FROM comments WHERE id = $1 AND user_id = $3 AND post_id = $2 ', [commentId, postId, userId]);
