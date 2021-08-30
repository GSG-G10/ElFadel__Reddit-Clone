const router = require('express').Router();
const auth = require('./authRouter');
const submit = require('./submitRouter');
const post = require('./postRoute');
const comment = require('./commentRouter');

router.use(auth);
router.use(submit);
router.use('/post', post);
router.use('/comment', comment);
module.exports = router;
