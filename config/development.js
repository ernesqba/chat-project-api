exports.config = {
  environment: 'development',
  isDevelopment: true,
  common: {
    database: {
      database: process.env.DB_NAME_DEV,
    },
  },
};
