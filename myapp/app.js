const fs                        = require('fs');
const path                      = require('path');
const express                   = require('express');
const MongoClient               = require("mongodb").MongoClient;
const cookieParser              = require('cookie-parser');
const logger                    = require('morgan');
const bodyParser                = require('body-parser');
require('./api/models/db');

const mongoose                  = require('mongoose');
const session                   = require('express-session');
const MongoStore                = require('connect-mongo')(session);

const app = express();
const port = 80;
let db;

app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'pug');

const index = require('./routes/index');
const indexApi = require('./api/routes/index');

app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(session({
  secret: 'weh649',
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: null
  },
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}))

app.use('/', index);
app.use('/api', indexApi);

app.use((req, res, next) => res.status(404).send("Запрашиваемая вами страница не найдена"))

app.use((err, req, res, next) => {
    res.status(500);
    res.render('error', {error: err.message});
    console.error(err.message, err.stack);
})

app.listen(port, '0.0.0.0', () => {
  console.log('запуск сервера на порту ' + port);
})