const router = require('express').Router();
const auth = require('./authRouter');
const submit = require('./submitRouter');
const post = require('./postRoute');
const comment = require('./commentRouter');
const profile = require('./profile');

router.use(auth);
router.use(submit);
router.use('/post', post);
router.use('/comment', comment);
router.use('/user', profile);
module.exports = router;
