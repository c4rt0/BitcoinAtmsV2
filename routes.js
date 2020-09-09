'use strict';

const Accounts = require('./app/controllers/accounts');
const Additions = require('./app/controllers/atms');
const Gallery = require('./app/controllers/gallery');

module.exports = [
  { method: 'GET', path: '/', config: Accounts.index },
  { method: 'GET', path: '/signup', config: Accounts.showSignup },
  { method: 'GET', path: '/login', config: Accounts.showLogin },
  { method: 'GET', path: '/logout', config: Accounts.logout },
  { method: 'POST', path: '/signup', config: Accounts.signup },
  { method: 'POST', path: '/login', config: Accounts.login },
  { method: 'GET', path: '/settings', config: Accounts.showSettings },
  { method: 'POST', path: '/settings', config: Accounts.updateSettings },

  { method: 'GET', path: '/gallery', config: Gallery.index },
  { method: 'POST', path: '/uploadfile', config: Gallery.uploadFile },
  { method: 'GET', path: '/deleteimage/{id}', config: Gallery.deleteImage },

  { method: 'GET', path: '/home', config: Additions.home },
  { method: 'GET', path: '/list', config: Additions.list },
  { method: 'POST', path: '/addAtm', config: Additions.addAtm },
  { method: 'GET', path: '/atmAdit/{id}', config: Additions.atmAdit },
  { method: 'GET', path: '/atmDelete/{id}', config: Additions.atmDelete },


  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: './public'
      }
    },
    options: { auth: false }
  }
];
