const knex = require('knex');

const config = require('../config');
const knexFile = require('../config/knex');

const envConfig = knexFile[config.env];

module.exports = knex(envConfig);
