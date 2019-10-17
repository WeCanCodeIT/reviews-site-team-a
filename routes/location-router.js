var express = require('express');
var locationRouter = express.Router();

const locationController = require('../src/controllers/location-controller')

/* GET home page. */
locationRouter.get('/', locationController.renderAll);
locationRouter.get('/all', locationController.renderAll);

/* GET Single Location */
locationRouter.get('/:id', locationController.renderLocation);

/* POST new review */
locationRouter.post('/', locationController.addLocation);

module.exports = locationRouter;