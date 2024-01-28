const datesRouter = require('express').Router();
const Dates = require('../models/dates');
const user = require('../models/user');
const Service = require('../models/service');

// datesRouter.get('/', async (request, response) => {
//   const dates = await Dates.find();
//   return response.status(200).json(dates);
// });

datesRouter.post('/', async (request, response) => {
  const { price } = request.body;
  const newDate = new Dates({ price });
  const savedDate = await newDate.save();
  console.log(savedDate.id);
  return response.status(201).json(savedDate);
});


//Hacer un post y patch

module.exports = datesRouter;