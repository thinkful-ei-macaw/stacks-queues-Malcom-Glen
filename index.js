/* eslint-disable no-console */
const Stack = require('./stack');
const { peek, isEmpty, display, remove } = require('./stack-helpers');

// Check for palindromes using a stack
// A palindrome is a word, phrase, or number that is spelled the same forward and backward.
// For example, “dad” is a palindrome;
// “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation;
// and 1,001 is a numeric palindrome.
// We can use a stack to determine whether or not a given string is a palindrome.

// Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.
function isPalindrome(str) {

}


function main() {

  // Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.
  let starTrek = new Stack(['Kirk', 'Spock', 'McCoy', 'Scotty']);

  // testing helper functions
  console.log(peek(starTrek));
  console.log(isEmpty(starTrek));
  remove(starTrek, 'McCoy');
  display(starTrek);

}

main();