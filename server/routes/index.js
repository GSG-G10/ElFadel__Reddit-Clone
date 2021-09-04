const router = require('express').Router();
const auth = require('./authRouter');
const submit = require('./submitRouter');
const post = require('./postRouter');
const comment = require('./commentRouter');
const user = require('./user');
const error = require('./errors');

router.use(auth);
router.use(submit);
router.use('/post', post);
router.use('/comment', comment);
router.use('/user', user);
router.use(error);
module.exports = router;
