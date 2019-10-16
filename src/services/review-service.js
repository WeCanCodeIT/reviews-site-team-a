const Review = require('../models/Review.sequelize');

module.exports = {
    async findAll () {
        try {
            const reviews = await Review.findAll();
            return reviews;
        } catch (error) {
            return error;
        }
    },
    async findReview (id) {
        try{
            const review = await Review.findByPk(id);
            return review;
        } catch (error){
            return error;
        }

    },
    async save (review, tagIds) {
        try{
            const newReview = await Review.create(review);
            newReview.addTag(tagIds);
        } catch(error){
            return error;
        }
    }
}