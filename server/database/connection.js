require('env2')('./config.env');
const {
  Pool,
} = require('pg');

const {
  NODE_ENV, DATABASE_URL_DEV, DATABASE_URL, DATABASE_URL_TEST,
} = process.env;
let dbUrl = '';
switch (NODE_ENV) {
  case 'development':
    dbUrl = DATABASE_URL_DEV;
    break;
  case 'production':
    dbUrl = DATABASE_URL;
    break;
  case 'test':
    dbUrl = DATABASE_URL_TEST;
    break;
  default:
    throw new Error('There\'s no environment');
}
const options = {
  connectionString: dbUrl,
  ssl: { rejectUnauthorized: false },
};
module.exports = new Pool(options);
