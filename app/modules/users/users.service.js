const { insertUser, getAllUsers } = require('./users.repository');

exports.createUser = async (params) => {
  console.log('[USER SERVICE] Create new user');
  try {
    return await insertUser(params);
  } catch (error) {
    console.error('Error to create user');
    // TODO Send a internal error like databaseError
    throw new Error('Error to create user');
  }
};

exports.getAllUsers = async (params) => {
  console.log('[USER SERVICE] Get all users');
  try {
    return await getAllUsers(params);
  } catch (error) {
    console.error('Error to get all users');
    // TODO Send a internal error like databaseError
    throw new Error('Error to get all users');
  }
};
