// Tags, Cat need relationship with Tag & Category table
const db = require('../util/db')
const Sequelize = require('sequelize');

const Review = db.define('review', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: { 
        type: Sequelize.STRING, 
        allowNull: false
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
    category: Sequelize.STRING
    }
)
module.exports = Review;