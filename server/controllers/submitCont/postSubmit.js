const { addPost } = require('../../database/queries');

module.exports = (req, res) => {
  // -->getUserId
  const { id } = req.dataUser;
  const {
    title, content, isPrivate,
  } = req.body;
  addPost(title, content, id, isPrivate).then(() => {
    res.redirect('/');
  }).catch(() => {
    res.cookie('error', 'Something went wrong, please try again :>');
    res.redirect('/submit');
  });
};
