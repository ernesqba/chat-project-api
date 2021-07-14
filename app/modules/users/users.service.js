const {
  insertUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('./users.repository');

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

exports.getUserById = async (id) => {
  console.log('[USER SERVICE] Get user by id');
  try {
    return await getUserById(id);
  } catch (error) {
    console.error('Error to get user by id');
    // TODO Send a internal error like databaseError
    throw new Error('Error to get user by id');
  }
};

exports.updateUserById = async (id, params) => {
  console.log('[USER SERVICE] Update user by id');
  try {
    return await updateUserById(id, params);
  } catch (error) {
    console.log(error);
    console.error('Error to update user by id');
    // TODO Send a internal error like databaseError
    throw new Error('Error to update user by id');
  }
};

exports.deleteUserById = async (id) => {
  console.log('[USER SERVICE] Delete user by id');
  try {
    return await deleteUserById(id);
  } catch (error) {
    console.error('Error to delete user by id');
    // TODO Send a internal error like databaseError
    throw new Error('Error to delete user by id');
  }
};
