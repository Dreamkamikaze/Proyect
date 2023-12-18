const employersRouter = require('express').Router();
const user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { PAGE_URL } = require('../config');


employersRouter.post('/', async (request, response) => {
  const { name, email, password, rol } = request.body;


  if (!name || !email ) {
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
    rol
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
    subject: password,
    // Subject line
    // eslint-disable-next-line quotes
    html: `<a href="${PAGE_URL}/verify/${savedUser.id}/${token}">Verficar correo</a>` // html body
  });

  return response.status(201).json( 'Usuario creado. Por favor verifica el correo' );
});


module.exports = employersRouter;