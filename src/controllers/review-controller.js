const reviewDomainObject = require('../models/Review');
const reviewService = require('../services/review-service');
const locationService = require('../services/location-service');

// Review Body Max Chars from environmental variable
const MAX_CHARS = process.env.MAX_CHARS;

class ReviewController { 

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
            const tags = await review.getTags();
            res.render("review", { review : review, tags: tags });
        } catch (error) {
            res.render("error", {error: error});
        }
    }

    static async addReview (req, res) {
        console.log(req.body);
        const author = req.body.author;
        const reviewBody = req.body.reviewBody;
        const reviewItem = req.body.reviewItem;
        const locationId = req.body.locationId;
        
        let tagStringIds;

        if (req.body.tags === undefined) {
            tagStringIds = [];
        } else if (typeof req.body.tags === "string") {
            tagStringIds = [req.body.tags]
        } else {
            tagStringIds
        }

        const tagIds = [];

        tagStringIds.forEach((tag) => {
            tagIds.push(Number(tag));
        });

        const reviewObject = new reviewDomainObject(author, reviewBody, reviewItem, MAX_CHARS);
        reviewObject.locationId = locationId;
        try{
            await reviewService.save(reviewObject, tagIds);
            res.redirect("/");
        } catch(error) {
            res.render("error", {error: error});
        }
    }     
}
module.exports = ReviewController;