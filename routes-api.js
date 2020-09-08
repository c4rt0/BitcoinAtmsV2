const atmapi = require('./app/api/atmapi');

module.exports = [
  { method: 'GET', path: '/api/atmapi', config: atmapi.find }
];