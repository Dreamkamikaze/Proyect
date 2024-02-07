const mongoose = require('mongoose');

const datesSchema = new mongoose.Schema({
  price: String,
  time: String,
  email: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  serviemplo: {
    type: mongoose.Schema.Types.Array,
    ref: 'Service',
  },
  payment: String,
  confirm: {
    type: Boolean,
    default: false
  }
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