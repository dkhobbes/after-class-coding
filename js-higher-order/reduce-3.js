// friends - an array of objects
// where object field "books" - list of favorite books
var friends = [{
  name: 'Anna',
  books: ['The Hobbit', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'The Anthem'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18git
}];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
var allbooks = friends.reduce(function(prev, curr) {
  return [...prev, ...curr.books];
}, ['Alphabet']);
