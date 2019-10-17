const reviewService = require("./review-service");
const Review = require('../models/Review.sequelize');

describe('review-service', () => {
    describe('findAll', () => {
        test.skip('should have been called once', () => {
            const reviewMock = {  // a mock function ...
                findAll: jest.fn()
              };

            reviewService.findAll = jest.fn(() => []);
            expect(reviewMock.findAll).toHaveBeenCalledTimes(1);
        });
    });
})
