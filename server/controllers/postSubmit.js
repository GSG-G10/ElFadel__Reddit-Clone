const { addPost } = require('../database/queries');

module.exports = (req, res) => {
  // -->getUserId
  console.log(req.dataUser);
  const { id } = req.dataUser;
  const {
    title, content, isPrivate,
  } = req.body;
  addPost(title, content, id, isPrivate).then(() => {

  });
};
