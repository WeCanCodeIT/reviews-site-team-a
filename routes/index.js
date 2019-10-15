var express = require('express');
var router = express.Router();

const reviewController = require('../src/controllers/review-controller')
// Nuthin', just developing and stuff
/* GET home page. */
router.get('/', reviewController.renderAll);
// GET single review page
router.get('/review/:id', reviewController.renderReview);

/* POST new review */
router.post('/', reviewController.addReview);

module.exports = router;
