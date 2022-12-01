const fs = require('fs');

// const content = fs.readFile('./01_first.js');
// console.log(content);
// console.log('job completed..');

console.log('ready to read..');
fs.readFile('nodejs/01_first.js', (err, content) => console.log(content));
console.log('job completed..');
