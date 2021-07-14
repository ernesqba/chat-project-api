const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('./users.service');

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

exports.getUserById = (req, res, next) => {
  console.log('[USER CONTROLLER] Get user by id');
  const { userId } = req.params;

  return getUserById(userId)
    .then((users) => res.status(200).json(users))
    .catch(next);
};

exports.updateUserById = (req, res, next) => {
  console.log('[USER CONTROLLER] Update user by id');
  const { userId } = req.params;
  const params = req.body;

  return updateUserById(userId, params)
    .then((users) => res.status(200).json(users))
    .catch(next);
};

exports.deleteUserById = (req, res, next) => {
  console.log('[USER CONTROLLER] Delete user by id');
  const { userId } = req.params;

  return deleteUserById(userId)
    .then(() => res.sendStatus(204))
    .catch(next);
};
