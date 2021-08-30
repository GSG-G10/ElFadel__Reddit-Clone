const router = require('express').Router();
const { profile } = require('../controllers');

router.get('/:userName', profile);
module.exports = router;
