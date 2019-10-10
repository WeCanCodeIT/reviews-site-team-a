const Review = require('../models/Review.sequelize');

module.exports = {
    findAll (callback) {
        Review.findAll().then(callback)
    },
    save (newReview, callback) {
        Review.create(newReview, callback).then(callback);
    }
}