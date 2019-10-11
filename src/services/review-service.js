const Review = require('../models/Review.sequelize');

module.exports = {
    findAll (callback) {
        Review.findAll().then(callback);
    },
    findReview (id, callback) {
        Review.findByPk(id).then(callback);
    },
    save (newReview, callback) {
        Review.create(newReview, callback).then(callback);
    }
}