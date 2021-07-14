const router = require('express').Router();

const {
  postMessage,
  getAllMessages,
  getMessageById,
  updateMessageById,
  deleteMessageById,
} = require('./messages.controller');

router.post('/', postMessage);
router.get('/', getAllMessages);
router.get('/:messageId', getMessageById);
router.patch('/:messageId', updateMessageById);
router.delete('/:messageId', deleteMessageById);

module.exports = router;
