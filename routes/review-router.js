var express = require('express');
var router = express.Router();

const reviewController = require('../src/controllers/review-controller')

// GET single review page
router.get('/:id', reviewController.renderReview);

// GET reroute reviews to index
router.get('/all', reviewController.renderAll);

module.exports = router;