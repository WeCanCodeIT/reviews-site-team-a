const reviewDomainObject = require('../models/Review');
const reviewService = require('../services/review-service');
const Review = require('../models/Review.sequelize');

class ReviewController {
    static renderAll (req, res) {
        reviewService.findAll((reviews) => {
            res.render("index", { reviews })
        })
    } 
}

module.exports = ReviewController;