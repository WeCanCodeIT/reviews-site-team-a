const db = require('../util/db')
const Sequelize = require('sequelize');

const Tag = db.define('tag', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: Sequelize.STRING
});
module.exports = Tag;