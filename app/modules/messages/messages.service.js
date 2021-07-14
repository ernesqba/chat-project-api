const {
  insertMessage,
  getAllMessages,
  getMessageById,
  updateMessageById,
  deleteMessageById,
} = require('./messages.repository');

exports.createMessage = async (params) => {
  console.log('[MESSAGE SERVICE] Create new message');
  try {
    return await insertMessage(params);
  } catch (error) {
    console.error('Error to create message');
    // TODO Send a internal error like databaseError
    throw new Error('Error to create message');
  }
};

exports.getAllMessages = async () => {
  console.log('[MESSAGE SERVICE] Get all messages');
  try {
    return await getAllMessages();
  } catch (error) {
    console.error('Error to get all messages');
    // TODO Send a internal error like databaseError
    throw new Error('Error to get all messages');
  }
};

exports.getMessageById = async (id) => {
  console.log('[MESSAGE SERVICE] Get message by id');
  try {
    return await getMessageById(id);
  } catch (error) {
    console.error('Error to get message by id');
    // TODO Send a internal error like databaseError
    throw new Error('Error to get message by id');
  }
};

exports.updateMessageById = async (id, params) => {
  console.log('[MESSAGE SERVICE] Update message by id');
  try {
    return await updateMessageById(id, params);
  } catch (error) {
    console.log(error);
    console.error('Error to update message by id');
    // TODO Send a internal error like databaseError
    throw new Error('Error to update message by id');
  }
};

exports.deleteMessageById = async (id) => {
  console.log('[MESSAGE SERVICE] Delete message by id');
  try {
    return await deleteMessageById(id);
  } catch (error) {
    console.error('Error to delete message by id');
    // TODO Send a internal error like databaseError
    throw new Error('Error to delete message by id');
  }
};
