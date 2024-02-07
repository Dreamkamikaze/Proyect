const datesViewRouter = require('express').Router();
const Dates = require('../models/dates');

datesViewRouter.get('/', async (request, response) => {
  const dates = await Dates.find({ confirm: true }).populate('user');
  return response.status(200).json(dates);

});

module.exports = datesViewRouter;