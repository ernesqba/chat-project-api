const {
  createMessage,
  getAllMessages,
  getMessageById,
  updateMessageById,
  deleteMessageById,
} = require('./messages.service');

exports.postMessage = (req, res, next) => {
  console.log('[MESSAGE CONTROLLER] Create new message');
  const params = req.body;
  return createMessage(params)
    .then((message) => res.status(200).json(message))
    .catch(next);
};

exports.getAllMessages = (req, res, next) => {
  console.log('[MESSAGE CONTROLLER] Get all messages');
  return getAllMessages()
    .then((messages) => res.status(200).json(messages))
    .catch(next);
};

exports.getMessageById = (req, res, next) => {
  console.log('[MESSAGE CONTROLLER] Get message by id');
  const { messageId } = req.params;

  return getMessageById(messageId)
    .then((messages) => res.status(200).json(messages))
    .catch(next);
};

exports.updateMessageById = (req, res, next) => {
  console.log('[MESSAGE CONTROLLER] Update message by id');
  const { messageId } = req.params;
  const params = req.body;

  return updateMessageById(messageId, params)
    .then((messages) => res.status(200).json(messages))
    .catch(next);
};

exports.deleteMessageById = (req, res, next) => {
  console.log('[MESSAGE CONTROLLER] Delete message by id');
  const { messageId } = req.params;

  return deleteMessageById(messageId)
    .then(() => res.sendStatus(204))
    .catch(next);
};
