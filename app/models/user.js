'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Boom = require('@hapi/boom');
const bcrypt = require('bcrypt');          // Again - use of bcrypt


const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email: email });
};

userSchema.methods.comparePassword = async function(candidatePassword) {        // and here edited bit
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = Mongoose.model('User', userSchema);