const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const usersRouter = require('./controlers/users');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
require('dotenv').config();

(async() => {
  try {
    await mongoose.connect(process.env.MONGO_DEV_URI);
    console.log('Conecto a MongoDB');
  } catch (error) {
    console.log(error);
    console.log('no conecto a mongodb');
  }
})();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Rutas Frontend
app.use('/styles', express.static(path.resolve(__dirname, 'views', 'styles')));
app.use('/', express.static(path.resolve(__dirname, 'views', 'home')));
app.use('/signup', express.static(path.resolve(__dirname, 'views', 'signup')));
app.use('/login', express.static(path.resolve(__dirname, 'views', 'login')));
app.use('/componentes', express.static(path.resolve(__dirname, 'views', 'componentes')));

app.use(morgan('tiny'));

//Rutas Backend
app.use('/api/users',  usersRouter);


module.exports = app;