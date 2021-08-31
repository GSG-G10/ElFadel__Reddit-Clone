const router = require('express').Router();
const { deletePost, isAuth, getPosts } = require('../controllers');

router.delete('/:id', isAuth, deletePost);
router.get('/allPost', getPosts);
module.exports = router;
