class Review { 
    constructor(author, reviewBody, reviewItem, reviewBodyMaxChars=512){
        this.author = author; 
        this.reviewBody = reviewBody;
        this.reviewBodyMaxChars = reviewBodyMaxChars;
        this.reviewItem = reviewItem;
    }
};
module.exports = Review;