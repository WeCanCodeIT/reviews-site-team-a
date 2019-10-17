var express = require('express');
var tagRouter = express.Router();

const tagController = require('../src/controllers/tag-controller')

/* GET home page. */
tagRouter.get('/', tagController.renderAll);

/* POST new review */
tagRouter.post('/', tagController.addTag);

module.exports = tagRouter;