'use strict';

const Atmz = require('../models/addition');

const Candidates = {
  find: {
    auth: false,
    handler: async function(request, h) {
      const atmapi = await Atmz.find();
      return atmapi;
    }
  },
};

module.exports = Candidates;