var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var signup = require('./routes/sign-up');
var logIn = require('./routes/log-in')
var profile = require('./routes/profile');
var editProfile = require('./routes/edit-profile');
var createSong = require('./routes/create-song');
var reviewSong = require('./routes/review-song')
var createPopDrop = require('./routes/create-popdrop')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'modules')));

app.use('/', index);
app.use('/users', users);
app.use('/sign-up',signup);
app.use('/log-in',logIn)
app.use('/profile',profile)
app.use('/edit-profile',editProfile)
app.use('/create-song',createSong)
app.use('/review-song',reviewSong)
app.use('/create-popdrop',createPopDrop)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
