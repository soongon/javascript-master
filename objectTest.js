var myNumber = 5;
var myString = 'hello'; // 'helol'
var myBoolean = true;

// array(배열) - collection 이라고도 함, Sequence
var myArray =  [1, 2, 3, 4, 5, 6, 7];
var myArray2 = [1, 2, 3, 4, 5, 7, 6];
var favoriteColors = ['red', 'white', 'brown'];

console.log(favoriteColors[1]); // get data

// JSON -> 웹에서 데이터를 교환하는 표준 포맷 (사실상 글로벌 표준)
// object(객체) - property 의 collection
// property --> key/value 쌍으로 표현되는 데이터
var myObject = {
  2: 'white', 
  1: 'red', 
  3: 'brown'
};

var aArticle = {
  title: '자바스크립트 배우기',
  content: 'good very easy and very exciting..',
  author: 'kim soongon',
  likes: 53,
  tags: ['javascript', 'programming', 'hobby']
};

console.log(aArticle['author']); // get data by index(key)