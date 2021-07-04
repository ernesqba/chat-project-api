const { createUser, getAllUsers } = require('./users.service');

exports.createUser = (params) => {
  console.log('[USER INTERACTOR] Create new user');
  return createUser(params);
};

exports.getAllUsers = () => {
  console.log('[USER INTERACTOR] Get all users');
  return getAllUsers();
};
