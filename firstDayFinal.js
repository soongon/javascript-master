// Array..
var favoriteColors = ['red', 'white', 'pink', 'brown'];

// add data
favoriteColors.push('tan');
console.log(favoriteColors);
// get data
var myColor = favoriteColors[2];
console.log(myColor);
// set data
favoriteColors[3] = '갈색';
console.log(favoriteColors[3]);
// delete data
delete favoriteColors[3];
console.log(favoriteColors);

// Object..
var aArticle = {
  author: 'kim',
  title: 'javascript',
  content: 'very exciting',
  likes: 35,
  isValid: true,
  tags: ['a', 'b', 'c', 'd',],
  writeData: {
    year: 2022,
    month: 11,
    day: 30,
  }
};

// get data
//var likes = aArticle['likes'];
var likes = aArticle.likes;
console.log(likes);

// set data
// 좋아요 숫자를 1증가 시킨다.
// aArticle++; aArticle += 1;
aArticle.likes = aArticle.likes + 1;
console.log(aArticle.likes);

aArticle.tags.push('e');
console.log(aArticle);

// add data
aArticle.dislikes = 0;
console.log(aArticle);

// cf) set data
aArticle.likes = 50;

// 위 두개의 코드를 --> 있으면 업데이트 없으면 인서트 --> upsert