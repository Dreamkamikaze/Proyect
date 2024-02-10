const getEmployersRouter = require('express').Router();
const Service = require('../models/service');

getEmployersRouter.get('/:id', async (request, response) => {
  try {
    const service = await Service.findById(request.params.id).populate('employed');
    return response.status(200).json(service);

  } catch (error) {
    console.log(error);
  }

});

module.exports = getEmployersRouter;