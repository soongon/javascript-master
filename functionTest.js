// define a function (function expression) *****
// default parameters
var addTwoNumbers = function (firstNumber=0, secondNumber=0) {
  return firstNumber + secondNumber
};

// call the function
var result = addTwoNumbers(3);

console.log(result);

// 함수는 정의하고 사용한다. 1. 정의(선언) 2. 사용
// 함수를 정의하는 방법 2가지가 있다.

// function declaration
function subTwoNumbers(firstNumber=0, secondNumber=0) {
  var result = firstNumber - secondNumber;
  return result;
}

// keyword parameters
var result2 = subTwoNumbers(secondNumber=3);
console.log(result2);

// default parameters 와 keyword parameters 는 모두 ES2015 버전에 추가되었습니다.