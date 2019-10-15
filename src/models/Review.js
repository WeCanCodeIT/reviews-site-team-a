class Review { 
    constructor(author, reviewBody, reviewItem, reviewBodyMaxChars){
        this.author = author; 
        this.reviewBody = reviewBody;
        this.reviewBodyMaxChars = reviewBodyMaxChars;
        this.reviewItem = reviewItem;
    }
    addTags(tag) {
        this._tags.push(tag)
        let tagToString = this._tags.join(", ")
        this.tags = tagToString;
    };
    removeTag(tag) {
        // One way of doing it --
        // for (let i; i < this.tags.length; i++) {
        //     (this.tags[i] === tag) ? this.tags.splice(i) : null;
        // }

         const checkTag = (item) => {
            return item != tag;
        }
        this.tags = this.tags.filter(checkTag);
        // Still need to remove passed tag from the database here
    };
};
module.exports = Review;