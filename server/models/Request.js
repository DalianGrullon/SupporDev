const mongoose = require('mongoose');

const { Schema } = mongoose;

const requestsSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  }
});

const Request = mongoose.model('Request', requestsSchema);

module.exports = Request;