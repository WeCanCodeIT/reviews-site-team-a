 // Tags, Cat need relationship with Tag & Category table
const db = require('../util/db');
const Sequelize = require('sequelize');
const Tag = require('./Tag.sequelize');
const Location = require('./Location.sequelize');
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

// Location.hasMany(Review, {foreignKey: "id", sourceKey: "locationId" });
// Review.belongsTo(Location, {foreignKey: "id", targetKey: "locationId"});

Review.belongsTo(Location, { constraints: true, onDelete: 'CASCADE' });
Location.hasMany(Review);

module.exports = Review;

