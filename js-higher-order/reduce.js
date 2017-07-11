var total = [0, 1, 2, 6].reduce(function(sum, value) {
  return sum + value;
}, 0);


var flattened = [[0, 1], [8, 3], [9, 5]].reduce(function(a, b) {
  return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]
