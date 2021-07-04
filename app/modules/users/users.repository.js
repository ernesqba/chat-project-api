const knex = require('../../../db/index');

const TABLE_NAME = 'users';

exports.insertUser = (params) => knex(TABLE_NAME).insert(params).returning('*');

exports.getAllUsers = () => knex.select('*').from(TABLE_NAME);

exports.getUserById = (id) => knex.select('*').from(TABLE_NAME).where({ id });
