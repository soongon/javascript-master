// destructuring.. 구조분해
// 배열이나 오브젝트의 아이템을 분해해서 각각의 변수에 담는 기능..
const farvoriteColors = ['red', 'blue', 'gray', 'orange', 'tan'];

// const red = farvoriteColors[0];
// const blue = farvoriteColors[1];
// const gray = farvoriteColors[2];
// const orange = farvoriteColors[3];
// const tan = farvoriteColors[4];

const [red, blue, gray, orange, tan, white] = farvoriteColors;
console.log(red, blue, gray, orange, tan, white);

// object 를 구조분해 하는거 이게 중요하다.! 실전코드에 많이 나와요..
const myObject = {
  title: 'today is good',
  content: 'good..',
  likes: 30,
  tags: ['a', 'b', 'c'],
  address: {
    city: 'seoul',
    dong: 'kangnamdong'
  },
};

// const title = myObjct.title;
// const content = myObjct.content;
// const city = myObjct.address.city;

const {tags, title: myTitle, content, address, job} = myObject;
console.log(myTitle);
