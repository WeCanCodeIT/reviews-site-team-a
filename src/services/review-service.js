const Review = require('../models/Review.sequelize');

module.exports = {
    findAll () {
        Review.findAll(callback).then(callback)
    },
    save (newReview) {
        Review.create(newReview, callback)
        .then(callback);
    }

}