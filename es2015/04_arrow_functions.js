// 화살표 함수
const myFunction = function (first, second) {
  return first + second;
};
const myFunctionArrow = (first, second) => first + second;

const myFunction2 = function (first) {
  return first * 2;
};
const myFunction2Arrow = first => first * 2;

const myFunction3 = function (first) {
  const temp = first * 2;
  console.log(temp);
};
const myFunction3Arrow = first => {
  const temp = first * 2;
  console.log(temp);
};

const myFunction4 = function() {
  console.log('hello');
}
const myFunction4Arrow = () => console.log('hello');

// 실제 화살표함수 응용..
var farvoriteColors = ['red', 'blue', 'gray', 'orange', 'tan'];

farvoriteColors.forEach(function (item) {
  console.log(item);
});

farvoriteColors.forEach(item => console.log(item));
const mapped = farvoriteColors.map(item => item.toUpperCase());
const filtered = farvoriteColors.filter(item => item.length > 3);