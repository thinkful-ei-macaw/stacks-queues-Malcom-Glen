// Check for palindromes using a stack
// A palindrome is a word, phrase, or number that is spelled the same forward and backward.
// For example, “dad” is a palindrome;
// “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation;
// and 1,001 is a numeric palindrome.
// We can use a stack to determine whether or not a given string is a palindrome.

// Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.
const Stack = require('../stack');

function is_palindrome(str) {
  // remove non alpha-numeric characters
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  // convert the string to a stack
  // take a look at the stack constructor to see how this works
  const strStack = new Stack(str);

  // create a variable to hold the reversed output
  let reversed = '';

  // loop through the stack,
  // adding the value at each node to our variable
  let node = strStack.top;
  while (node !== null) {
    reversed += node.data;
    node = node.next;
  }

  // compare the reversed variable to the str that was passed as an argument
  return reversed === str;
}

module.exports = is_palindrome;