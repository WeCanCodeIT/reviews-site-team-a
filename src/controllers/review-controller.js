const reviewDomainObject = require('../models/Review');
const reviewService = require('../services/review-service');
const Review = require('../models/Review.sequelize');

class ReviewController { 
    // static renderAll (req, res) {
    //     reviewService.findAll((reviews) => {
    //         console.log(reviews);
    //         res.render("index", { reviews: reviews })
    //     })
    // }
    static async renderAll (req, res) {
        try {
            const reviews = await reviewService.findAll();
            res.render("index", {reviews: reviews});

        } catch (error) {
            res.render("error", {error: error});
        }
    }

    static async renderReview (req, res) {
        const id = req.params.id;
        try{
            const review = await reviewService.findReview(id) 
            res.render("review", { review : review });
        } catch (error) {
            res.render("error", {error: error} );
        }
    }

    static async addReview (req, res) {
        const author = req.body.author;
        const reviewBody = req.body.reviewBody;
        const reviewItem = req.body.reviewItem;
        const category = req.body.category;
        try{
            await reviewService.save(new reviewDomainObject(author, reviewBody, reviewItem, category));
            res.redirect("/");
        } catch(error) {
            res.render("error", {error: error});
        }
    }     
}


module.exports = ReviewController;