const servicesRouter = require('express').Router();
const Service = require('../models/service');

servicesRouter.get('/', async (request, response) => {
  const service = await Service.find();
  return response.status(200).json(service);
});

servicesRouter.post('/', async (request, response) => {
  const { service } = request.body;
  const { description } = request.body;
  const { price } = request.body;
  const { option }= request.body;
  console.log(service, description, price, option);
  const newService = new Service({
    service,
    description,
    price,
    option
  });
  const savedService = await newService.save();
  return response.status(201).json(savedService);
});

servicesRouter.delete('/:id', async (request, response) => {
  await Service.findByIdAndDelete(request.params.id);
  return response.sendStatus(204);
});


module.exports = servicesRouter;
