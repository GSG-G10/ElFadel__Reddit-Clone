const router = require('express').Router();
const auth = require('./authRouter');
const submit = require('./submitRouter');

router.use(auth);
router.use(submit);
module.exports = router;
