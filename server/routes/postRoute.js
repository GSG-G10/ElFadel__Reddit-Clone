const router = require('express').Router();
const { deletePost, getUserData } = require('../controllers');

router.delete('/:id', getUserData, deletePost);
module.exports = router;
