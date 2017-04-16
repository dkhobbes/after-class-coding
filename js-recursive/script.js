var array_sum = function(my_array) {
  if (my_array.length === 1) {
    return my_array[0];
  }
  else {
    return my_array.pop() + array_sum(my_array);
  }
};

document.write(array_sum([7,6,3]));
console.log(array_sum([7,6,3]));
