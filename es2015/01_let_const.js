/*
var myNumber = 5;
var myString = 'hello';
var myArray = [1, 2, 3, 4];
var myObjct = {
  name: 'kim',
  age: 20,
};
*/

// 변수 선언시 사용..
// 한번 선언되고 값이 할당 되면(초기화) 값을 바꿀수 없다. immutable
// 기본적으로 const 를 사용하고, 할수없이 변수의 내용을 바꿔야 할 경우가 있을 시 .. let 사용
const myNumber = 5;
const myString = 'hello';
const myArray = [1, 2, 3, 4];
const myObjct = {
  name: 'kim',
  age: 20,
};
// let 사례
for (let i in myArray) {
  console.log(i);
}