const db = require('../util/db')
const Sequelize = require('sequelize');

const Location = db.define('location', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    location: { 
        type: Sequelize.STRING, 
        allowNull: false,
        default: "No Name",
        unique: true
    }
});

module.exports = Location;