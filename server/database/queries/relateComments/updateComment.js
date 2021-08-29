const connection = require('../../connection');

module.exports = (postId, commentId, newValue) => connection.query('UPDATE comments SET content = $1 WHERE post_id=$2 AND id=$3 ', [newValue, postId, commentId]);
