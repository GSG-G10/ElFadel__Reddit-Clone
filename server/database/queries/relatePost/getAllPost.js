const connection = require('../../connection');

module.exports = () => connection.query(`SELECT posts.id, posts.title, posts.content,posts.votes, posts.created_at,  posts.user_id, users.name,users.email,users.image, COUNT(comments.id) AS number_comments
  FROM posts
  LEFT JOIN comments ON posts.id = comments.post_id
  LEFT JOIN users ON posts.user_id = users.id
  GROUP BY posts.id, posts.title, posts.content,posts.votes, posts.created_at,  posts.user_id, users.name,users.email,users.image
  ORDER BY posts.votes DESC;`);
