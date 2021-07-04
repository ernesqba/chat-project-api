const { createUser, getAllUsers } = require('./users.service');

exports.postUser = (req, res, next) => {
  console.log('[USER CONTROLLER] Create new user');
  const params = req.body;
  return createUser(params)
    .then((user) => res.status(200).json(user))
    .catch(next);
};

exports.getAllUsers = (req, res, next) => {
  console.log('[USER CONTROLLER] Get all users');
  return getAllUsers()
    .then((users) => res.status(200).json(users))
    .catch(next);
};
