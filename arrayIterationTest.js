var farvoriteColors = ['red', 'blue', 'gray', 'orange', 'tan'];

// old fashioned..
for (var i = 0; i < farvoriteColors.length; i++) {
  console.log(farvoriteColors[i]);
}

for (var i in farvoriteColors) {
  console.log(farvoriteColors[i]);
}

// functional way..
farvoriteColors.forEach(function (item) {
  console.log(item);
});

// another functional way..
var result = farvoriteColors.map(function (item) {
  return item.toUpperCase();
});
console.log(result);
