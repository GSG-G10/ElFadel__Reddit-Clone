const router = require('express').Router();
const auth = require('./authRouter');
const submit = require('./submitRouter');
const post = require('./postRoute');

router.use(auth);
router.use(submit);
router.use('/post', post);
module.exports = router;
