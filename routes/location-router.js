var express = require('express');
var locationRouter = express.Router();

const locationController = require('../src/controllers/location-controller')

/* GET home page. */
router.get('/', locationController.renderAll);

/* POST new review */
router.post('/', locationController.addLocation);

module.exports = locationRouter;
