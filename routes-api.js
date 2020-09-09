const atmapi = require('./app/api/atmapi');

module.exports = [
  { method: 'GET', path: '/api/atmapi', config: atmapi.find },
  { method: 'GET', path: '/api/atmapi/{id}', config: atmapi.findOne },
  { method: 'POST', path: '/api/atmapi', config: atmapi.create },
];