const reviewDomainObject = require('../models/Review');
const reviewService = require('../services/review-service');
const Review = require('../models/Review.sequelize');

class ReviewController { 
    static renderAll (req, res) {
        reviewService.findAll((reviews) => {
            console.log(reviews);
            res.render("index", { reviews: reviews })
        })
    }
    static addReview (req, res) {
        const author = req.body.author;
        const reviewBody = req.body.reviewBody;
        const reviewItem = req.body.reviewItem;
        const category = req.body.category;
    
        reviewService.save(new reviewDomainObject(author, reviewBody, reviewItem, category), (newReview) => {
            console.log(newReview);
            res.redirect("/");
        })
    }
}

module.exports = ReviewController;