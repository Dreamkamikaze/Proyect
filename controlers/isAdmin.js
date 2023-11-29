const adminRouter = require('express').Router();
const user = require('../models/user');

adminRouter.get('/', async (request, response) => {
  const usuario = await user.find({ role: 'admin' });
  return response.status(200).json(usuario);
});

module.exports = adminRouter;
