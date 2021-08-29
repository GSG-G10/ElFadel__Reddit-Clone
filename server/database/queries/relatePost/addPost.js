const connection = require('../../connection');

module.exports = (title, content, userId, isPrivate = false) => connection.query('INSERT INTO posts (title, content,user_id,isPrivate) VALUES ($1,$2,$3,$4)', [title, content, userId, isPrivate]);
