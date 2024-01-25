// models/subTaskModel.js
const mongoose = require('mongoose');

const subTaskSchema = new mongoose.Schema({
  task_id: String,
  user_id: String,
  status: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  deleted_at: Date,
});

module.exports = mongoose.model('SubTask', subTaskSchema);