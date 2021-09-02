const router = require('express').Router();
const {
  profilePage,
  profileInfo,
  isAuth,
  sendDataUser,
} = require('../controllers');

router.get('/checkUser', isAuth, sendDataUser);
router.get('/profileInfo/:user', profileInfo);
router.get('/:userName', profilePage);

module.exports = router;
