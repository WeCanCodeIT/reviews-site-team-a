const Review = require('../models/Review.sequelize');

module.exports = {
    findAll () {
        let reviews;
        Review.findAll().then((res) => {
            reviews = res.dataValues;
            console.log(reviews);
        })
        return reviews;
    }

}