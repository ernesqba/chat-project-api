const router = require('express').Router();

const healtCheck = require('../modules/healtCheck/healtCheck.controller');
const usersRoutes = require('../modules/users/users.routes');
const messageRoutes = require('../modules/messages/messages.routes');

// Health check
router.get('/healt', healtCheck);

// Resources
router.use('/users', usersRoutes);
router.use('/messages', messageRoutes);

module.exports = router;
