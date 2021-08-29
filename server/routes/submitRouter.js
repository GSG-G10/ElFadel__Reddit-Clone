const router = require('express').Router();
const { getSubmit, postSubmit, isAuth } = require('../controllers');

router.get('/submit', isAuth, getSubmit);
router.post('/submit', postSubmit);
module.exports = router;
