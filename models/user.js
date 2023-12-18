const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  tlf: String,
  passwordHash: String,
  verified: {
    type: Boolean,
    default: false
  },
  rol: {
    type: String,
    default: 'usuario',
  }
});

userSchema.set('toJSON', {
  trasnform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;