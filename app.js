const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const AppDataSource = require("./src/data-source");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const isAuthenticated = require("./src/middlewares/auth.middle");
// import "reflect-metadata"

const app = express();
//session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,

}))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

AppDataSource.initialize()
    .then(() => {
      console.log('connect database success')
    })
    .catch((error) => console.log(error))

app.use('/auth', authRouter);

app.use('/', isAuthenticated, indexRouter);
app.use('/users', isAuthenticated, usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
