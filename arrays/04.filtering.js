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

// 문. 각 레슨에 array 와 관련된 레슨을 필터링하세요 (tags 에 array 가 포함된 레슨을 필터링)
var filtered2 = lessons.filter(function (lesson) {
  return lesson.tags.indexOf('array') > -1;
});
console.log(filtered2);
// map 에관한 문제) 각 레슨에 조회수를 모두 100회씩 일괄적으로 증가 시키세요..
var filtered3 = lessons.map(function (lesson) {
  lesson.views = lesson.views + 100;
  return lesson;
});
console.log(filtered3);

// console.log(lessons);
// console.log(filtered);



