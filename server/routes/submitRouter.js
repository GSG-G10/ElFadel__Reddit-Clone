const router = require('express').Router();
const {
  getSubmit, postSubmit, isAuth, getUserData,
} = require('../controllers');

router.get('/submit', isAuth, getSubmit);
router.post('/submit', getUserData, postSubmit);
module.exports = router;
