const mongoose = require('mongoose');

const datesSchema = new mongoose.Schema({
  price: String,
  time: {
    type: String,
    default: 'Hora indefinida'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  services: {
    type: mongoose.Schema.Types.Array,
    ref: 'Service'
  },
  employeds: [{
    type: mongoose.Schema.Types.ObjectId,
    default: 'Cualquiera',
    ref: 'User',
  }],
});

datesSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Dates = mongoose.model('Dates', datesSchema);

module.exports = Dates;