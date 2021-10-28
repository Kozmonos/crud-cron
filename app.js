const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config()
const db = require('./helper/db');

// require("./startup")()

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require("./router")(app)

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(async (nextData, req, res, next) => {
  try {
    console.log(nextData);
    if (!nextData) {
      res.status(nextData.status || 400);
      res.json({ message: "Data was not found." })
    } else {
      res.status(nextData.status || 200);
      res.json(await nextData)
    }

  } catch (error) {
    console.log(error);
    res.status(nextData.status || 500); res.json(error)
  }

});

module.exports = app;
