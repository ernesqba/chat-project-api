const ENVIRONMENT = process.env.NODE_ENV || 'development';
require('dotenv').config();

const config = {
  env: ENVIRONMENT,
  common: {
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    api: {
      bodySizeLimit: process.env.API_BODY_SIZE_LIMIT || 256,
      parameterLimit: process.env.API_PARAMETER_LIMIT || 200,
      port: process.env.PORT,
      baseUrl: process.env.BASE_URL || '',
    },
  },
};

module.exports = config;
