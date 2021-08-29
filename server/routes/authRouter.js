const router = require('express').Router();
const { signUpController, loginController } = require('../controllers');

router.post('/signUp', signUpController);
router.post('/login', loginController);
module.exports = router;
