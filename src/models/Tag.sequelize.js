const db = require('../util/db')
const Sequelize = require('sequelize');
const Review = require('./Review.sequelize');

const Tag = db.define('tag', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: Sequelize.STRING
});

Tag.belongsToMany(Review, {through: 'review_tags'});
Review.belongsToMany(Tag, {through: 'review_tags'});

module.exports = Tag;