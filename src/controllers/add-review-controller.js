const reviewDomainObject = require('../models/Review');
const reviewService = require('../services/review-service');
const locationService = require('../services/location-service');
const tagService = require('../services/tag-service');

// Global Constants
const MAX_CHARS = process.env.MAX_CHARS;
const DEFAULT_IMAGE = "../public/img/aromatic-beans-blur-773958.jpg"


class AddReviewController { 
    static async renderAll (req, res) {
        try {
            const locations = await locationService.findAll();
            const tags = await tagService.findAll();
            res.render("add-review", {locations: locations, tags: tags});

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
        const imgUrl = (req.body.imgUrl !== undefined) ? 
            DEFAULT_IMAGE :
            req.body.imgUrl;
        
        let tagStringIds;

        if (req.body.tags === undefined) {
            tagStringIds = [];
        } else if (typeof req.body.tags === "string") {
            tagStringIds = [req.body.tags]
        } else {
            tagStringIds = req.body.tags;
        }

        const tagIds = [];

        tagStringIds.forEach((tag) => {
            tagIds.push(Number(tag));
        });

        const reviewObject = new reviewDomainObject(author, reviewBody, reviewItem, MAX_CHARS);
        reviewObject.locationId = locationId;
        try{
            const newReview = await reviewService.save(reviewObject, tagIds);
            console.log("*** New Review*** \n\n ", newReview, "\n\n");
            res.redirect("/review/" + newReview.id);
        } catch(error) {
            res.render("error", {error: error});
        }
    }     
}
module.exports = AddReviewController;