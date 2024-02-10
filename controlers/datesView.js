const datesViewRouter = require('express').Router();
const Dates = require('../models/dates');

datesViewRouter.get('/', async (request, response) => {
  try {
    const dates = await Dates.find({ confirm: true }).populate('user');
    return response.status(200).json(dates);

  } catch (error) {
    console.log(error);
  }

});

module.exports = datesViewRouter;