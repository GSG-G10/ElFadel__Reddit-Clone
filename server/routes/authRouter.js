const router = require('express').Router();
const {
  signUpController, loginController, logoutController, isAuth,
} = require('../controllers');

router.get('/signup', signUpController);
router.get('/login', loginController);
router.post('/signUp', signUpController);
router.post('/login', loginController);
router.get('/logout', logoutController);
module.exports = router;
