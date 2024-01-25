// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  phone_number: {
    type: String,
    required: true,
  },
  priority: {
    type: Number,
    required: true,
    enum: [0, 1, 2],
  },
 
});

module.exports = mongoose.model('User', userSchema);
