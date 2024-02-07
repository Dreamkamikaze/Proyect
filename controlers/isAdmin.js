const adminRouter = require('express').Router();
const user = require('../models/user');

adminRouter.get('/', async (request, response) => {
  const usuario = request.usuario;
  const admin = await user.find({ _id: usuario._id });
  return response.status(200).json(admin);

});

module.exports = adminRouter;
