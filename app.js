const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const usersRouter = require('./controlers/users');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const loginRouter = require('./controlers/login');
const { userExtractor } = require('./middleware/auth');
const adminRouter = require('./controlers/isAdmin');
const servicesRouter = require('./controlers/services');
const employersRouter = require('./controlers/employers');
const getEmployersRouter = require('./controlers/getEmployers');
const datesRouter = require('./controlers/dates');
const datesViewRouter = require('./controlers/datesView');
const logoutRouter = require('./controlers/logout');
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
app.use('/servicess', express.static(path.resolve(__dirname, 'views', 'servicess')));
app.use('/employed/:id', express.static(path.resolve(__dirname, 'views', 'employed')));
app.use('/schedule/:id/', express.static(path.resolve(__dirname, 'views', 'schedule')));
app.use('/signem', express.static(path.resolve(__dirname, 'views', 'signem')));
app.use('/userServices/', express.static(path.resolve(__dirname, 'views', 'userServices')));
app.use('/confirm/:id', express.static(path.resolve(__dirname, 'views', 'confirm')));
app.use('/datesView/', express.static(path.resolve(__dirname, 'views', 'datesView')));
app.use('/userEmployed/:id', express.static(path.resolve(__dirname, 'views', 'userEmployed')));
app.use('/verify/:id/:token', express.static(path.resolve(__dirname, 'views', 'verify')));

app.use(morgan('tiny'));

//Rutas Backend
app.use('/api/users',  usersRouter);
app.use('/api/employers', employersRouter);
app.use('/api/getEmployers', getEmployersRouter);
app.use('/api/login',  loginRouter);
app.use('/api/services', servicesRouter);
app.use('/api/dates', datesRouter);
app.use('/api/datesView', datesViewRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/isAdmin', userExtractor, adminRouter);



module.exports = app;