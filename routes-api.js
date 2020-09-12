const atmapi = require('./app/api/atmapi');
const Users= require('./app/api/users');

module.exports = [
  { method: 'GET', path: '/api/atmapi', config: atmapi.find },
  { method: 'GET', path: '/api/atmapi/{id}', config: atmapi.findOne },
  { method: 'POST', path: '/api/atmapi', config: atmapi.create },
  { method: 'DELETE', path: '/api/atmapi/{id}', config: atmapi.deleteOne },
  { method: 'DELETE', path: '/api/atmapi', config: atmapi.deleteAll },
  { method: 'GET', path: '/api/users', config: Users.find },
  { method: 'GET', path: '/api/users/{id}', config: Users.findOne },
  { method: 'POST', path: '/api/users', config: Users.create },
  { method: 'DELETE', path: '/api/users/{id}', config: Users.deleteOne },
  { method: 'DELETE', path: '/api/users', config: Users.deleteAll }
];