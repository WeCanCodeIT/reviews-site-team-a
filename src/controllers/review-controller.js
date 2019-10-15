const reviewDomainObject = require('../models/Review');
const reviewService = require('../services/review-service');
const locationService = require('../services/location-service');

// Review Body Max Chars from environmental variable
const MAX_CHARS = process.env.MAX_CHARS;

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
            const locations = await locationService.findAll();
            res.render("index", {reviews: reviews, locations: locations});

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
            res.render("error", {error: error});
        }
    }

    static async addReview (req, res) {
        const author = req.body.author;
        const reviewBody = req.body.reviewBody;
        const reviewItem = req.body.reviewItem;
        const locationId = req.body.locationId;
        const tagId = req.body.tagId;
        const reviewObject = new reviewDomainObject(author, reviewBody, reviewItem, MAX_CHARS);
        reviewObject.locationId = locationId;
        reviewObject.tagId = tagId;
        try{
            await reviewService.save(reviewObject);
            res.redirect("/");
        } catch(error) {
            res.render("error", {error: error});
        }
    }     
}
module.exports = ReviewController;