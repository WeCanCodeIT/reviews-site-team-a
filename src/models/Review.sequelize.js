// Tags, Cat need relationship with Tag & Category table
const db = require('../util/db')
const Sequelize = require('sequelize');
const MAX_CHARS = process.env.MAX_CHARS;

const Review = db.define('review', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: { 
        type: Sequelize.STRING, 
        allowNull: true,
        default: "No Description"
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
    tags: Sequelize.STRING,
    location: Sequelize.STRING,
    reviewBodyMaxChars: Sequelize.INTEGER
    }

)
module.exports = Review;

