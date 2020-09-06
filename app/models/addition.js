'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const atmSchema = new Schema({
  name: String,
  category: String,
  description: String
});

module.exports = Mongoose.model('Addition', atmSchema);
