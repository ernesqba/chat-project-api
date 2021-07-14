const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('./users.service');

exports.createUser = (params) => {
  console.log('[USER INTERACTOR] Create new user');
  return createUser(params);
};

exports.getAllUsers = () => {
  console.log('[USER INTERACTOR] Get all users');
  return getAllUsers();
};

exports.getUserById = (id) => {
  console.log('[USER INTERACTOR] Get user by id');
  return getUserById(id);
};

exports.updateUserById = (id, params) => {
  console.log('[USER INTERACTOR] Update user by id');
  return updateUserById(id, params);
};

exports.deleteUserById = (id) => {
  console.log('[USER INTERACTOR] Delete user by id');
  return deleteUserById(id);
};
