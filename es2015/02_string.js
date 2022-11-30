// ES2015에서 스트링의 변화된 부분은 하나.. 중요한 거..
// String interpolation(문자 끼워넣기) 드디어 지원함(숙원사업)

// 기존 before ES6
const myName = 'kim soongon';
const age = 20;

const introduceMyself = '내 이름은 ' + myName + ' 이고 나이는 ' + age + '살 입니다.';
console.log(introduceMyself);

// ES6 way..
const introduceMyself2 = `내 이름은 ${myName} 이고 나이는 ${age}살 입니다.`;