const router = require('express').Router();
const auth = require('./authRouter');
const submit = require('./submitRouter');
const post = require('./postRoute');
const comment = require('./commentRouter');
const user = require('./user');

router.use(auth);
router.use(submit);
router.use('/post', post);
router.use('/comment', comment);
router.use('/user', user);
module.exports = router;
