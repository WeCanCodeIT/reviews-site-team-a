var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sequelize = require('./src/util/db');
const createBaseData = require('./src/util/db-base-content');
const Locations = require('./src/models/Location.sequelize');
const Tag = require('./src/models/Tag.sequelize');
const Review = require('./src/models/Review.sequelize');

// Set Max char length for review body
process.env.MAX_CHARS = 512;

var indexRouter = require('./routes/index');
var reviewRouter = require('./routes/review-router');
var tagRouter = require('./routes/tag-router');
var addReviewRouter = require('./routes/add-review-router');
var locationsRouter = require('./routes/location-router');
var donateRouter = require('./routes/donate-router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './src/public')));

app.use('/', indexRouter);
app.use('/review', reviewRouter);
app.use('/tag', tagRouter);
app.use('/addreview', addReviewRouter);
app.use('/location', locationsRouter);
app.use('/donate', donateRouter);
// app.use('/users', usersRouter);

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

// Locations.belongsTo(Review);
// Review.belongsToMany(Tag, {through: 'review_tags'});
// Locations.hasMany(Reviews, {through: 'LocationsReview'});
// Tags.hasMany(Review, {through: 'TagsReview'});

sequelize.sync({force: true})
  .then(() => {
    console.log('BullShit DB Connected');
    createBaseData();
  })
  .catch(console.error)

module.exports = app;
