const { join } = require('path');

module.exports = (req, res) => {
  res.status(200).sendFile(join(__dirname, '../../../public/views/submit.html'));
};
