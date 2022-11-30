// split *****
// 문자열을 특정 구분자로 구분하여 배열로 만들어 주는 함수
var aSentence = 'jQuery is a fast, small, and feature-rich JavaScript library.';
var splitted = aSentence.split(' ');
console.log(splitted);

splitted.forEach(function (item) {
  console.log(item);
});

// 각 단어를 대문자로 만든다.
var mapped = splitted.map(function (item) {
  return item.toUpperCase();
});
console.log(mapped);

// join ****
// 배열의 아이템을 하나의 스트링으로 만들어 주는 함수
var joinedString = splitted.join(' ');
console.log(joinedString);