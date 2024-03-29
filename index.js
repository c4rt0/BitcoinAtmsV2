'use strict';

const Hapi = require('@hapi/hapi');
const dotenv = require('dotenv');
const ImageStore = require('./app/utils/image-store');
const porto = 3000;
const link = `http:\/\/localhost:${porto}`;

const result = dotenv.config();
if (result.error) {
  console.log(result.error.message);
  process.exit(1);
}

const server = Hapi.server({
  port: process.env.PORT || porto,
});

require('./app/models/db');

const credentials = {
  cloud_name: process.env.name,
  api_key: process.env.key,
  api_secret: process.env.secret
};

async function init() {
  await server.register(require('@hapi/inert'));
  await server.register(require('@hapi/vision'));
  await server.register(require('@hapi/cookie'));

  ImageStore.configure(credentials);

  server.validator(require('@hapi/joi'))

  server.auth.strategy('session', 'cookie', {
    cookie: {
      name: process.env.cookie_name,
      password: process.env.cookie_password,
      isSecure: false
    },
    redirectTo: '/'
  });

  server.auth.default('session');

  server.views({
    engines: {
      hbs: require('handlebars')
    },
    relativeTo: __dirname,
    path: './app/views',
    layoutPath: './app/views/layouts',
    partialsPath: './app/views/partials',
    layout: true,
    isCached: false
  });

  server.route(require('./routes'));
  server.route(require('./routes-api'));

  await server.start();
  console.log(`Server running at: ${link}`);
}

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
