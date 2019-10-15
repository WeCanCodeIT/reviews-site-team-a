class Review{ 

    constructor(author, reviewBody, reviewItem, category){
        this.author = author; 
        this.category = category;
        this.reviewBody = reviewBody;
        this.reviewItem = reviewItem;
        this.tags = "";
        this._tags = [];
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
    }
    setAuthor(writer){
        this.author = writer
    };
    setReview(words){
        this.reviewBody = words
    };
    setReviewItem(item){
        this.reviewItem = item
    };
    setTags(hashtag){
        this.tags = hashtag
    };
    getAuthor(){
        return this.author;
    };
    getReview(){
        return this.reviewBody;
    };
    getReviewItem(){
        return this.reviewItem;
    };
    getTags(){
        return this.tags;
    };
};
module.exports = Review;