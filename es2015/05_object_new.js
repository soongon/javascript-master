// Object 의 새롭게 추가된 기능..

const fullName = 'kim soongon';
const age = 20;

// const myProfile = {
//   fullName: fullName,
//   age: age,
//   eat: () => {
//     console.log('먹어요..');
//   },
// };

// 새로운 숏컷..
const myProfile = {
  fullName,
  age,
  eat() {
    console.log('먹어요');
  },
};

console.log(myProfile);