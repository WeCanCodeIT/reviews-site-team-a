// var TagsTable = require('./src/services/tag-service');
const LocationsTable = require('../models/Location.sequelize');

// DB BullShit base data
const baseLocationsList = [ {location: "some more shit!"}, {location: "McDonald's"}, {location: "Starbuck's"}, {location: "Stauf's"}, {location: "Crimson Cup"}, {location: "Timmy Ho's"} ]
// const baseTagList = [ {name: "Decaffeinated"}, {name: "Caffeinated"}, {name: "Hot"}, {name: "Cold"} ]

// set up BullShit Locations and Tags table
const buildBaseData = () => {
    LocationsTable.bulkCreate(baseLocationsList, {
      fields: ["location"],
      updateOnDuplicate: ["location"]
    })
}

module.exports = buildBaseData;