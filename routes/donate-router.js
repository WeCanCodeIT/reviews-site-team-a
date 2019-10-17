var express = require('express');
var locationRouter = express.Router();

const donateController = require('../src/controllers/donate-controller')

locationRouter.get('/', donateController.renderAll);

/* POST new location */
locationRouter.post('/', donateController.addLocation);

module.exports = locationRouter;