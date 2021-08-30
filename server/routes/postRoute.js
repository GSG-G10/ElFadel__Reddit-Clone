const router = require('express').Router();
const { deletePost, isAuth } = require('../controllers');

router.delete('/:id', isAuth, deletePost);
module.exports = router;
