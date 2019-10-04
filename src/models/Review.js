class Review{ 

    constructor(props){
        this.author = props.author; 
        this.review = props.review;
        this.reviewItem = props.reviewItem;
        this.tags = props.tags;
    }
    setAuthor(writer){
        this.author = writer
    };
    setReview(words){
        this.review = words
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
        return this.review;
    };
    getReviewItem(){
        return this.reviewItem;
    };
    getTags(){
        return this.tags;
    };
};
module.exports = Review;