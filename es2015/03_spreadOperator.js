// spread operator .. 펼침 연산자
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

console.log(...firstArray);
console.log([1, 2, 3, firstArray]); // [1, 2, 3, [1, 2, 3]];
console.log([1, 2, 3, ...firstArray]); // [1, 2, 3, 1, 2, 3];


// 주) 함수의 파라미터로 ... 연산자는 펼침연산자가 아니라, 
// 여러개의 파라미터를 받을 수 있는 가변길이 파라미터 이다.
const myFunction = function (...p) {
  console.log(p);
}

myFunction(firstArray, secondArray);
myFunction(1, 2, 3, 4, 5, 6);