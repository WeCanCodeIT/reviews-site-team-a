var express = require('express');
var router = express.Router();

const addReviewController = require('../src/controllers/add-review-controller')

/* POST new review */
router.post('/', addReviewController.addReview);

/* GET new review page */
router.get('/', addReviewController.renderAll);

module.exports = router;
