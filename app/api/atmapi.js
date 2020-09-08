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
  },
  create: {
    auth: false,
    handler: async function(request, h) {
      const newAtm = new Atmz(request.payload);
      const addition = await newAtm.save();
      if (atm) {
        return h.response(addition).code(201);
      }
      return Boom.badImplementation('error creating atm');
    }
  },

  deleteAll: {
    auth: false,
    handler: async function(request, h) {
      await Atmz.remove({});
      return { success: true };
    }
  },

  deleteOne: {
    auth: false,
    handler: async function(request, h) {
      const addition = await Atmz.remove({ _id: request.params.id });
      if (addition) {
        return { success: true };
      }
      return Boom.notFound('id not found');
    }
  }
};

module.exports = Candidates;