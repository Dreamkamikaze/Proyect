const datesRouter = require('express').Router();
const Dates = require('../models/dates');

datesRouter.get('/:id', async (request, response) => {
  try {
    const dates = await Dates.findById(request.params.id).populate('user');
    return response.status(200).json(dates);

  } catch (error) {
    console.log(error);
  }
});

datesRouter.post('/', async (request, response) => {
  const { price, time, serviemplo, user, email, payment } = request.body;
  const newDate = new Dates({
    price,
    time,
    user,
    email,
    serviemplo,
    payment,
  });
  const savedDate = await newDate.save();
  console.log(savedDate.id);
  return response.status(201).json(savedDate);
});

datesRouter.delete('/:id', async (request, response) => {
  await Dates.findByIdAndDelete(request.params.id);
  return response.sendStatus(204);
});

datesRouter.patch('/:id', async  (request, response) => {
  let { payment } = request.body;

  await Dates.findByIdAndUpdate(request.params.id, { payment, confirm: true });

  return response.status(200).json('Su cita a sido agendada');
});


module.exports = datesRouter;