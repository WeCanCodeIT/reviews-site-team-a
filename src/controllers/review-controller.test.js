const reviewService = require("../services/review-service");
const ReviewController = require("./review-controller");

describe("ReviewController", () => {
    describe("renderAll", () => {
      test.skip("should call res.render with '/' and a valid model object", () => {
        // Arrange
        const requestMock = {}; // a blank request...
        const responseMock = {  // a mock function response...
          render: jest.fn()
        };
        reviewService.findAll = jest.fn(() => []);  // reviewService should call a mock function to return an array
    
        // Act
        ReviewController.renderAll(requestMock, responseMock);
    
        // Assert
        expect(responseMock.render).toHaveBeenCalledTimes(1);
        expect(responseMock.render).toHaveBeenCalledWith("index", {
          reviews: []
        });
      });
    });
});