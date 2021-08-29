const connection = require('../../connection');

module.exports = (name, password, email) => connection.query(
  'INSERT INTO users (name, password, email) VALUES ($1, $2, $3) RETURNING *',
  [name, password, email],
);
