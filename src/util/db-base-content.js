// var TagsTable = require('./src/services/tag-service');
var LocationsTable = require('../models/Location.sequelize');

// DB BullShit base data
const baseLocationsList = [ {name: "McDonald's"}, {name: "Starbuck's"}, {name: "Stauf's"}, {name: "Crimson Cup"}, {name: "Timmy Ho's"} ]
const baseTagList = [ {name: "Decaffeinated"}, {name: "Caffeinated"}, {name: "Hot"}, {name: "Cold"} ]

// set up BullShit Locations and Tags table
const buildBaseData = () => {
    LocationsTable.bulkCreate(baseLocationsList, {
      fields: ["name"],
      updateOnDuplicate: ["name"]
    })
}

module.exports = buildBaseData;