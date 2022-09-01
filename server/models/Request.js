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
  },
  requester: {
    type: Schema.Types.ObjectId,
    ref: 'Requester'
  }
});

const Request = mongoose.model('Request', requestsSchema);

module.exports = Request;