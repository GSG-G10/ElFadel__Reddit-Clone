const connection = require('../../connection');

module.exports = (content, postId, userId) => connection.query(
  'INSERT INTO comments (content,post_id,user_id) VALUES ($1,$2,$3) RETURNING *', [content, postId, userId],
);
