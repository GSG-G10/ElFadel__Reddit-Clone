const router = require('express').Router();
const { isAuth } = require('../controllers');
const {
  addComment, deleteComment, updateComment, getComments,
} = require('../controllers');

router.get('/:userName/comments/:idPost', getComments);
router.post('/addComment', isAuth, addComment);
module.exports = router;
