'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const atmSchema = Schema({
  atmName: String,
  atmDescription: String,
  atmCategory: String,
});

module.exports = Mongoose.model('Atm', atmSchema);