const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');


const developerSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  contributions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Request'
    }
  ]
});

// set up pre-save middleware to create password
developerSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
developerSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const Developer = mongoose.model('Developer', developerSchema);

module.exports = Developer;
