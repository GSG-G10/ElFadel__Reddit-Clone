const router = require('express').Router();
const { isAuth } = require('../controllers');
const {
  addComment, deleteComment, updateComment, getComments,
} = require('../controllers');

router.get('/:userName/comments/:idPost', getComments);
router.post('/addComment', isAuth, addComment);
router.delete('/deleteComment/:idComment', isAuth, deleteComment);
router.put('/updateComment/:idComment', isAuth, updateComment);
module.exports = router;
