const router = require('express').Router();
const {
  deletePost, isAuth, getPosts, upvote, downvote,
} = require('../controllers');

router.delete('/:id', isAuth, deletePost);
router.get('/allPost', getPosts);
router.get('/upVote/:id', isAuth, upvote);
router.get('/downVote/:id', isAuth, downvote);
module.exports = router;
