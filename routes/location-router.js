var express = require('express');
var locationRouter = express.Router();

const locationController = require('../src/controllers/location-controller')

/* GET home page. */
locationRouter.get('/', locationController.renderAll);

/* POST new review */
locationRouter.post('/', locationController.addLocation);

module.exports = locationRouter;