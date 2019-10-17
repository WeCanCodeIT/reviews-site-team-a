const LocationsTable = require('../models/Location.sequelize');
const TagsTable = require('../models/Tag.sequelize');

// DB BullShit base data
const baseLocationsList = [ 
  {location: "some more shit!"}, 
  {location: "McDonald's"}, 
  {location: "Starbuck's"}, 
  {location: "Stauf's"}, 
  {location: "Crimson Cup"}, 
  {location: "Timmy Ho's"} ]

const baseTagsList = [
  {name: "Strong"},
  {name: "Cold"},
  {name: "Hot"},
  {name: "Bitter"},
  {name: "Foamy"},
  {name: "Miscellaneous"},
  {name: "Flavored"},
  {name: "Water"}
]

// const baseTagList = [ {name: "Decaffeinated"}, {name: "Caffeinated"}, {name: "Hot"}, {name: "Cold"} ]

// set up BullShit Locations and Tags table
const buildBaseData = () => {
    LocationsTable.bulkCreate(baseLocationsList, {
      fields: ["location"],
      updateOnDuplicate: ["location"]
    });
    TagsTable.bulkCreate(baseTagsList, {
      fields: ["name"],
      updateOnDuplicate: ["name"]
    })

}

module.exports = buildBaseData;