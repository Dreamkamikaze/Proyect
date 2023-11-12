const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
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

//Rutas Frontend
app.use('/styles', express.static(path.resolve(__dirname, 'views', 'styles')));
app.use('/', express.static(path.resolve(__dirname, 'views', 'home')));
app.use('/signup', express.static(path.resolve(__dirname, 'views', 'signup')));
app.use('/componentes', express.static(path.resolve(__dirname, 'views', 'componentes')));

//Rutas Backend

module.exports = app;