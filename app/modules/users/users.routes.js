const router = require('express').Router();

const {
  postUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('./users.controller');

router.post('/', postUser);
router.get('/', getAllUsers);
router.get('/:userId', getUserById);
router.patch('/:userId', updateUserById);
router.delete('/:userId', deleteUserById);

module.exports = router;
