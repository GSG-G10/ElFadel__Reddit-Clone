const { signUpQueries } = require('../database/queries');

module.exports = (req, res) => {
  signUpQueries(req.body).then(() => {
    console.log('success');
  }).catch((err) => {
    console.log(err);
  });
};
