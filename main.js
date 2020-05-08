/* eslint-disable no-console */
const Stack = require('./stack');
const { peek, isEmpty, display } = require('./stack-helpers');
const { is_palindrome, is_balanced } = require('./algorithms');


function main() {
  // Create a stack called starTrek and
  // add Kirk, Spock, McCoy, and Scotty to the stack.
  // let starTrek = new Stack(['Kirk', 'Spock', 'McCoy', 'Scotty']);

  // // testing helper functions
  // console.log(peek(starTrek));
  // console.log(isEmpty(starTrek));
  // starTrek.pop(); // removes Scotty
  // starTrek.pop(); // removes McCoy
  // display(starTrek);

  // // Palindrome tests
  // console.log(is_palindrome('dad')); // => true
  // console.log(is_palindrome('A man, a plan, a canal: Panama')); // => true
  // console.log(is_palindrome('1001')); // => true
  // console.log(is_palindrome('Tauhida')); // => false

  // Balanced expression tests
  console.log(is_balanced('(1 + 1)')); // => true
  console.log(is_balanced('([)]')); // => false
  console.log(is_balanced('{ 1 + 2 + "))(())(())" }')); // => true
}

main();