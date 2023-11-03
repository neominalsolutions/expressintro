var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const dataSource = require('./database/db');
// hbs handlebars kısatması razor view engine gibi bir view engine
// https://www.npmjs.com/package/hbs

// using
// CommonJS import module system

// react ts olduğu için import

// uygulama gelen istekler route dosyalarına yönlendirilir.
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express(); // express uygulamasını ayağa kaldır.

// view engine setup
// __dirname project current dizin
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs'); // hbs view engine

// middleware kısmı
app.use(logger('dev')); // loglama
app.use(express.json()); // json data okuma express.json paketi ile olur
app.use(express.urlencoded({ extended: false })); // form dan gönderilen değerleri okumak gerekli middleware
app.use(cookieParser()); // cookie desteği yok olsun diye
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	// sayfa bulunamadı hataları için middleware
	res.render('404');
	//next(createError(404));
});

// error handler
// hata yakalama middleware
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	// res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
