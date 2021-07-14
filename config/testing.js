exports.config = {
  environment: 'testing',
  isTesting: true,
  common: {
    session: {
      secret: 'some-super-secret',
    },
    database: {
      database: process.env.DB_NAME_TEST,
    },
  },
};
