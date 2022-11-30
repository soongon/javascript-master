// 배열 두개를 합치기
var articles = [
  {
    author: 'kim',
    title: 'javascript',
  },
  {
    author: 'lee',
    title: 'java',
  },
];

var articles2 = [
  {
    author: 'park',
    title: 'python',
  },
  {
    author: 'choi',
    title: 'c#',
  },
];

var newArticles = articles.concat(articles2);
console.log(newArticles);