const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const pacientesRouter = require("./routes/pacientes");
const medicosRouter = require("./routes/medicos");
const apiCovid = require("./routes/api");

const { connect } = require("./db/db")

const app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pacientes', pacientesRouter)
app.use('/medicos', medicosRouter)
app.use('/api', apiCovid)

connect()

module.exports = app;
