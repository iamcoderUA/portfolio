const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
require('./api/models/db');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const indexApi = require('./api/routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api', indexApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((req, res, next) => res.status(404).send("Запрашиваемая вами страница не найдена"))

app.use((err, req, res, next) => {
  res.status(500);
  res.render('error', {error: err.message});
  console.error(err.message, err.stack);
})

module.exports = app;
