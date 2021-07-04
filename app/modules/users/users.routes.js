const router = require('express').Router();

const { postUser, getAllUsers } = require('./users.controller');

router.post('/', postUser);
router.get('/', getAllUsers);

module.exports = router;
