const router = require('express').Router();
const {
  profilePage,
  profileInfo,
} = require('../controllers');

router.get('/profileInfo/:user', profileInfo);
router.get('/:userName', profilePage);

module.exports = router;
