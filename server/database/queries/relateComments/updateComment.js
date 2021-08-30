const connection = require('../../connection');

module.exports = (commentId, newValue) => connection.query('UPDATE comments SET content = $1 WHERE  id=$2 ', [newValue, commentId]);
