var express = require('express');
var router = express.Router();

const reviewController = require('../src/controllers/review-controller')
// Nuthin', just developing and stuff
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', reviewController.renderAll);
});

module.exports = router;
