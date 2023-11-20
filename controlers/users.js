const usersRouter = require('express').Router();
const user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  if (!name || !email || !password) {
    return response.status(400).json({ error: 'Todos los espacios son requeridos' });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash( password, saltRounds);
  const newUser = new user({
    name,
    email,
    passwordHash,
  });

  const savedUser = await newUser.save();
  const token = jwt.sign({ id: savedUser.id }, process.env.ACCESS_TOKEN_SECRET );
  console.log(token);
});

module.exports = usersRouter;