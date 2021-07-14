const {
  createMessage,
  getAllMessages,
  getMessageById,
  updateMessageById,
  deleteMessageById,
} = require('./messages.service');

exports.createMessage = (params) => {
  console.log('[MESSAGE INTERACTOR] Create new message');
  return createMessage(params);
};

exports.getAllMessages = () => {
  console.log('[MESSAGE INTERACTOR] Get all messages');
  return getAllMessages();
};

exports.getMessageById = (id) => {
  console.log('[MESSAGE INTERACTOR] Get message by id');
  return getMessageById(id);
};

exports.updateMessageById = (id, params) => {
  console.log('[MESSAGE INTERACTOR] Update message by id');
  return updateMessageById(id, params);
};

exports.deleteMessageById = (id) => {
  console.log('[MESSAGE INTERACTOR] Delete message by id');
  return deleteMessageById(id);
};
