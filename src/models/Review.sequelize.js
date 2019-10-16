 // Tags, Cat need relationship with Tag & Category table
const db = require('../util/db');
const Sequelize = require('sequelize');
const Tag = require('./Tag.sequelize');
const MAX_CHARS = process.env.MAX_CHARS;

const Review = db.define('review', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    reviewBody: { 
        type: Sequelize.STRING(MAX_CHARS), 
        allowNull: true,
        default: "No Review"
    },
    reviewItem: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imgUrl: Sequelize.STRING,
    reviewBodyMaxChars: Sequelize.INTEGER
});

Review.belongsToMany(Tag, {through: 'review_tags'});
Tag.belongsToMany(Review, {through: 'review_tags'});

module.exports = Review;

