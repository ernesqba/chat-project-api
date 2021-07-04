const router = require('express').Router();

const healtCheck = require('../modules/healtCheck/healtCheck.controller');
const usersRoutes = require('../modules/users/users.routes');

// Health check
router.get('/healt', healtCheck);

// Resources
router.use('/users', usersRoutes);

module.exports = router;
