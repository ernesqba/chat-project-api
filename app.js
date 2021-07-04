const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('./config');
const routes = require('./app/routes/index');
const errors = require('./app/middleware/errors');

const { port } = config.common.api;
const bodyParserJsonConfig = {
  limit: config.common.api.bodySizeLimit,
};
const bodyParserUrlEncodedConfig = {
  extended: true,
  limit: config.common.api.bodySizeLimit,
  parameterLimit: config.common.api.parameterLimit,
};

Promise.resolve()
  .then(() => {
    // Instantiate express
    const app = express();

    // Middleware for http headers security
    app.use(helmet());

    // Parse of json and url
    app.use(bodyParser.json(bodyParserJsonConfig));
    app.use(bodyParser.urlencoded(bodyParserUrlEncodedConfig));

    // Basic logger
    app.use(morgan('dev'));

    // Routes
    app.use(routes);

    // Error handler
    app.use(errors.handler);

    // Listen in port
    app.listen(port);

    // TODO -> Add a cute logger for info and errors
    console.log(`Listening on port ${port}`);
  })
  .catch(console.error);
