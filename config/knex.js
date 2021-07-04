const path = require('path');
const config = require('./index');

const defaultDbConfig = {
  connection: { ...config.common.database },
  client: 'pg',
  migrations: {
    tableName: 'knex_migrations',
    directory: path.resolve(__dirname, '../db/migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, '../db/seeds'),
  },
};

const knex = {
  development: {
    // Local environment
    ...defaultDbConfig,
    asyncStackTraces: true,
    debug: true,
  },
  testing: {
    // Unit testing environment
    ...defaultDbConfig,
    asyncStackTraces: true,
  },
  production: {
    // Hosted environments
    ...defaultDbConfig,
    connection: {
      ...defaultDbConfig.connection,
      ssl: true,
    },
  },
};

module.exports = knex;
