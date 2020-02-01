export class Post {
    id: Number;
    text: String;
    datetime: String;
    upvotes: Number;

    constructor(id: Number, text: String, date: String, upvotes: Number) {
        this.id = id;
        this.text = text;
        this.datetime = date;
        this.upvotes = upvotes;
    }
}
