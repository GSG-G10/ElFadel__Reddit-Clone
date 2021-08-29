const router = require('express').Router();
const { signUpController, loginController, logoutController } = require('../controllers');

router.post('/signUp', signUpController);
router.post('/login', loginController);
router.get('/logout', logoutController);
module.exports = router;
