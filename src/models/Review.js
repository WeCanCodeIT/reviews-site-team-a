class Review { 
    constructor(author, reviewBody, reviewItem, reviewBodyMaxChars){
        this.author = author; 
        this.reviewBody = reviewBody;
        this.reviewBodyMaxChars = reviewBodyMaxChars;
        this.reviewItem = reviewItem;
    }
};
module.exports = Review;