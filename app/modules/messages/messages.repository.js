const knex = require('../../../db/index');

const TABLE_NAME = 'messages';

exports.insertMessage = (params) => knex(TABLE_NAME).insert(params).returning('*');

exports.getAllMessages = () => knex.select('*').from(TABLE_NAME);

exports.getMessageById = (id) => knex.select('*').from(TABLE_NAME).where({ id });

exports.updateMessageById = (id, params) => knex(TABLE_NAME).where({ id }).update(params).returning('*');

exports.deleteMessageById = (id) => knex(TABLE_NAME).where('id', id).del();
