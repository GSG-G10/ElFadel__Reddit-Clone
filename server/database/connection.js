const {
  Pool,
} = require('pg');
require('env2')('./config.env');

const {
  NODE_ENV, DATABASE_URL_DEV, DATABASE_URL_PROD, DATABASE_URL_TEST,
} = process.env;
let dbUrl = '';
switch (NODE_ENV) {
  case 'development':
    dbUrl = DATABASE_URL_DEV;
    break;
  case 'production':
    dbUrl = DATABASE_URL_PROD;
    break;
  case 'test':
    dbUrl = DATABASE_URL_TEST;
    break;
  default:
    throw new Error('There\'s no environment');
}
const options = {
  connectionString: dbUrl,
  ssl: false,
};
module.exports = new Pool(options);
