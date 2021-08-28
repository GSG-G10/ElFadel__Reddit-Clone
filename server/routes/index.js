const router = require('express').Router();
const { signUpController } = require('../controllers');

router.post('/signUp', signUpController);
module.exports = router;
