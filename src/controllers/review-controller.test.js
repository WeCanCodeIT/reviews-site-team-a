const reviewService = require("../services/review-service");
const ReviewController = require("./review-controller");

// static renderAll(req, res) {
//     res.render("students/all", { students: studentService.findAll() });
// }

describe("rerenderAll", () => {
  test.skip("should call res.render with '/' and a valid model object", () => {
    // Arrange
    const requestMock = {};
    const responseMock = {
      render: jest.fn()
    };
    reviewService.findAll = jest.fn(() => []);

    // Act
    ReviewController.renderAll(requestMock, responseMock);

    // Assert
    expect(responseMock.render).toHaveBeenCalledTimes(1);
    expect(responseMock.render).toHaveBeenCalledWith("/", {
      reviews: []
    });
  });
});