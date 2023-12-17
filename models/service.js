const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  service: String,
  description: String,
  price: Number,
  option: String
});

serviceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;