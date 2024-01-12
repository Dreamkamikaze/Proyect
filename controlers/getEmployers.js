const getEmployersRouter = require('express').Router();
const Service = require('../models/service');

getEmployersRouter.get('/:id', async (request, response) => {
  const service = await Service.findById(request.params.id).populate('employed');
  return response.status(200).json(service);

});

module.exports = getEmployersRouter;