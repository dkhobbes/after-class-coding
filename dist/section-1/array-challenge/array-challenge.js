function arrayReverser(arr) {
  var arr = ['foo', 'bar', 'baz'];
  return arr.reverse();
}

function sumArrayOfNumbers(arr) {
  var sum = [2, 6, 7, 41, 9].reduce((a, b) => a + b, 0);
  return sum;
}

function numbersOver10(arr) {
  return arr >= 10;
  
  var nums = [1, 6, 42, 3, 17, 19, 6, 8].filter(numbersOver10);
}

function numbersOverX(arr, num) {
}

function stringsLongerThanFourLetters(arr) {
}

function stringsLongerThanXLetters(arr, length) {
}
