const { getComment } = require('../../database/queries');
/// :userName/comments/:idPost
module.exports = (req, res) => {
  const { idPost } = req.params;
  getComment(idPost).then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(err);
  });
};
