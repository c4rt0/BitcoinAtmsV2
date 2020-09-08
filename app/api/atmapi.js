'use strict';

const Atmz = require('../models/addition');
const Boom = require('@hapi/boom');

const Candidates = {
  find: {
    auth: false,
    handler: async function(request, h) {
      const atmapi = await Atmz.find(); // Atmz referencing atmSchema name in models/addition.js
      return atmapi;
    }
  },
  findOne: {
    auth: false,
    handler: async function(request, h) {
      try {
        const atmapi = await Atmz.findOne({ _id: request.params.id });
        if (!atmapi) {
          return Boom.notFound('No ATM with this id');
        }
        return atmapi;
      } catch (err) {
        return Boom.notFound('No ATM with this id');
      }
    }
  }
};

module.exports = Candidates;