const usersRouter = require('express').Router();
const user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { PAGE_URL } = require('../config');


usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  if (!name || !email || !password) {
    return response.status(400).json({ error: 'Todos los espacios son requeridos' });
  }

  const userExist = await user.findOne({ email });

  if (userExist) {
    return response.status(400).json({ error: 'Correo ya en uso' });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash( password, saltRounds);
  const newUser = new user({
    name,
    email,
    passwordHash,
  });

  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser.id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1h'
  });
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: savedUser.email,
    subject: 'Hello ✔', // Subject line
    // eslint-disable-next-line quotes
    html: `<a href="${PAGE_URL}/verify/${savedUser.id}/${token}">Verficar correo</a>` // html body
  });

  return response.status(201).json( 'Usuario creado. Por favor verifica el correo' );
});


usersRouter.patch('/:id/:token', async (request, response) => {
  try {
    const token  = request.params.token;
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET );
    const id = decodedToken.id;
    await user.findByIdAndUpdate(id, { verified: true });
    return response.sendStatus(200);
  } catch (error) {
    const id = request.params.id;
    const { email } = await user.findById(id);
    const token = jwt.sign({ id: id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '1h'
    });
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Hello ✔', // Subject line
      // eslint-disable-next-line quotes
      html: `<a href="${PAGE_URL}/verify/${id}/${token}">Verficar correo</a>` // html body
    });

    return response.status(400).json({ error:'El tiempo de validacion ha culminado, se le enviara otro correo' });

  }
});

module.exports = usersRouter;