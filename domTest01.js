// vanilla javascript way..
// 안녕하세요 라는 컨텐츠가 있는 태그를 확보 (get)
var theTag = document.getElementsByTagName('h2');
console.log(theTag[0].innerText);

var theTag2 = document.getElementById('greet');
console.log(theTag2.innerText);

var theTag3 = document.querySelector('div > p');
console.log(theTag3.innerText);


// jquery way..
//$('div > p').innerText

// function buttonClicked() {
//   console.log('button clicked..');
// }

var buttonClicked = function () {
  document.querySelector('div > p').innerText = '데이터 바꿉니다. 이렇게';
};