const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  department: String,
  role: String,
  salary: Number,
  doj: { type: Date, default: Date.now },
  phone: String
});

module.exports = mongoose.model('Employee', employeeSchema);
