'use strict';

const Addition = require('../models/addition');
const User = require('../models/user');
const Joi = require('@hapi/joi');


const Atms = {
  home: {
    handler: async function (request, h) {
      return h.view('home', { title: 'Enjoy using our API!' });
    }
  },
  list: {
    handler: async function (request, h) {
      try {
        const additions = await Addition.find().populate('donor').lean();
        return h.view('list', {
          title: 'Atms to Date',
          additions: additions
        });
      } catch (err) {
        return h.view('main', { errors: [{ message: err.message }] });
      }
    }
  },
  addAtm: {
    handler: async function (request, h) {
      try {

        //const id = request.auth.credentials.id;
        //const user = await User.findById(id);


        const data = request.payload;

        if (data.id) {


          var atm = await Addition.findById(data.id);
          //console.log(atm);
          atm.name = data.name;
          atm.category = data.category;
          atm.description = data.description;

          await atm.save();

        }
        else {

          const newAddition = new Addition({
            name: data.name,
            category: data.category,
            description: data.description,
          });
          await newAddition.save();

        }

        return h.redirect('/list');
      } catch (err) {
        return h.view('main', { errors: [{ message: err.message }] });
      }
    }
  },

  atmAdit: {
    handler: async function (request, h) {
      var id = request.params.id


      var atm = {};

      const additions = await Addition.find().populate('donor').lean();

      additions.forEach(element => {
        if (element._id == id) {
          atm = element;
          return true
        }
      });
      return h.view('atm_setting', { atm: atm });
    }
  },
  /*
    validate: {
      payload: {
        name: Joi.string().required(),
        category: Joi.string().required(),
        description: Joi.string().required()
      },
      options: {
        abortEarly: false
      },
      failAction: function (request, h, error) {
        return h
          .view('atm_Settings', {
            title: 'Sign up error',
            errors: error.details
          })
          .takeover()
          .code(400);
      }
    },
    */
  add_adit_Form: {
    handler: async function (request, h) {
      try {

        var id = request.params.id
        console.log(id);
        /*
        const userEdit = request.payload;
        const id = request.auth.credentials.id;
        const user = await Addition.findById(id);
        user.name = userEdit.name;
        user.category = userEdit.category;
        user.description = userEdit.description;
        await user.save();
        */
        return h.redirect('/list');
      } catch (err) {
        return h.view('main', { errors: [{ message: err.message }] });
      }
    }
  },
  atmDelete: {
    handler: async function (request, h) {
      try {
        var id = request.params.id;
        var atm = await Addition.findById(id);
        atm.remove();
        return h.redirect('/list');
      } catch (err) {
        return h.view('main', { errors: [{ message: err.message }] });
      }
    }
  }
};

module.exports = Atms;
