const router = require('express').Router();

router.get('/submit', getSubmit);
router.post('/submit', postSubmit);
module.exports = router;
