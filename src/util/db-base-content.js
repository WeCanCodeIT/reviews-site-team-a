const LocationsTable = require('../models/Location.sequelize');
const TagsTable = require('../models/Tag.sequelize');
const ReviewsTable = require('../models/Review.sequelize')

// DB BullShit base data
const baseLocationsList = [ 
  {location: "Lucky's"}, 
  {location: "McDonald's"}, 
  {location: "Starbuck's"}, 
  {location: "Stauf's"}, 
  {location: "Crimson Cup"}, 
  {location: "Timmy Ho's"} ]

const baseTagsList = [
  {name: "Bitter"},
  {name: "Water"},
  {name: "Hot"},
  {name: "Cold"},
  {name: "Strong"},
  {name: "Flavored"},
  {name: "Foamy"},
  {name: "Sweet"},
  {name: "Decaf"}
]
// imgUrl: "http://placekitten.com/g/200/300"
// sample { author: "Brad", reviewBody: "The review", reviewItem: "Coffee"}
// Tags: Bitter, Water, Hot, Cold, Strong, Flavored, Roomy, Sweet
const baseReviewPopulation = [
  { tags: ["1", "3", "5"], author: "Brad", reviewBody: "Object Oriented Programming", reviewItem: "Solo", imgUrl: "../img/aromatic-beans-blur-773958.jpg", locationId: "4"},
  { tags: ["3", "4", "1", "8"], author: "The Whistler", reviewBody: "few feeeeewww wfff wfff feeeeeeeeeew!", reviewItem: "Tea", imgUrl: "../img/caffeine-coffee-camericanoup-6347.jpg", locationId: "2"},
  { tags: ["1", "2"], author: "Zack", reviewBody: "She's a brick house. She's mighty mighty, just lettin' it all hang out!", reviewItem: "Americano", imgUrl: "../img/coffee-983955_640.jpg", locationId: "5"},
  { tags: ["3", "4", "6", "7"], author: "DJ Khalid", reviewBody: "THIS IS THE BEST! WHY AM I YELLING?!", reviewItem: "Cafe Latte", imgUrl: "../img/DJ_Khaled.jpg", locationId: "1"},
  { tags: ["1", "3", "9"], author: "Jessika", reviewBody: "This one time at band camp, I had Decaf and it was about as good as the spelling of my name. Psh. Whats the point of Decaf anyway?!", reviewItem: "Coffee", imgUrl: "http://placekitten.com/g/200/300", locationId: "2"},
  { tags: ["3"], author: "Marty McFly", reviewBody: "Doc! This Tea has to get back to the future!", reviewItem: "Tea", imgUrl: "../img/George_Clooney_2016.jpg", locationId: "1"},
  { tags: ["1", "2", "4", "5", "6"], author: "Spider Man", reviewBody: "Everybody gets One!", reviewItem: "Cold Brew", imgUrl: "../img/Jennifer_Lopez.jpg", locationId: "6"}
]
// const baseTagList = [ {name: "Decaffeinated"}, {name: "Caffeinated"}, {name: "Hot"}, {name: "Cold"} ]

// set up BullShit Locations and Tags table
const buildBaseData = async () => {
    await LocationsTable.bulkCreate(baseLocationsList, {
      fields: ["location"],
      updateOnDuplicate: ["location"]
    });
    await TagsTable.bulkCreate(baseTagsList, {
      fields: ["name"],
      updateOnDuplicate: ["name"]
    });
    baseReviewPopulation.forEach(async review => {
      let newReview = await ReviewsTable.create(review);
      await newReview.addTag(review.tags)
    });
    // ReviewsTable.bulkCreate(baseReviewPopulation, {
    //   fields: ["imgUrl", "author", "reviewBody", "reviewItem"],
    //   updateOnDuplicate: ["imgUrl", "author", "reviewBody", "reviewItem"]
    // });
}

module.exports = buildBaseData;