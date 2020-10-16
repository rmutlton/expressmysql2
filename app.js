var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentsRouter = require('./routes/students');
var customersRouter = require('./routes/customers');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter); // localhost:3000/api
app.use('/api/users', usersRouter); // localhost:3000/api/users
app.use('/api/students', studentsRouter); // localhost:3000/api/students
app.use('/api/customers', customersRouter); // localhost:3000/api/customers

module.exports = app;
