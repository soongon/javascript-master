var farvoriteColors = ['red', 'blue', 'gray', 'orange', 'tan'];

// 원본 배열을 복사하는 작업
var copy = farvoriteColors.slice();
console.log(farvoriteColors);
console.log(copy);

// 수정작업을 복사본에 수행
copy[1] = '파랑';
console.log(farvoriteColors);
console.log(copy);

// slice.. 배열 혹은 스트링을 인덱스에 기반하여 자르는 기능.
//var sliced = farvoriteColors.slice(2, 4);
//var sliced = farvoriteColors.slice(2);
var sliced = farvoriteColors.slice(-3, -1);

console.log(sliced);

// splice..