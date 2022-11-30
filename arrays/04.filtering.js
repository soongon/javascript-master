// 자바스크립트에서 데이터는 주로 배열로 많이 다루어 집니다.
// 데이터 가공 .. map, filter, reduce (데이터 가공 3대 작업)
// map, filter

var lessons = [
  {
      title: 'Javascript Arrays in Depth - join',
      views: 960,
      tags: ['array', 'join']
  },
  {
      title: 'Javascript Arrays in Depth - concat',
      views: 1050,
      tags: ['array', 'concat']
  },
  {
      title: 'Javascript Arrays in Depth - slice',
      views: 2503,
      tags: ['array', 'slice']
  },
  {
      title: 'Javascript Functions in Depth - bind',
      views: 2500,
      tags: ['functions', 'bind']
  }
];

var filtered = lessons.filter(function (lesson) {
  return lesson.views >= 1000
});

console.log(lessons);
console.log(filtered);



