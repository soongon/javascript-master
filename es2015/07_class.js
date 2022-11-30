class Article {
  constructor(author, title, content, likes) {
    this.author = author;
    this.title = title;
    this.content = content;
    this.likes = likes;
  }

  toString() {
    console.log(this.author, this.content, this.title, this.likes);
  }
}

const myArticle = {
  author: 'kim', 
  title: 'good',
  content: 'very good',
  likes: 23,
};

const myArticle2 = new Article('kim', 'good', 'very good', 23);
console.log(myArticle)
console.log(myArticle2)
