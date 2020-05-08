/* eslint-disable no-console */
// Write a function that takes an arithmetic expression as an argument
// and returns true or false based on matching parenthesis.
// As a bonus provide a meaningful error message to the user as to what's missing.
// For example, you are missing a ( or missing a ")".
const Stack = require('../stack');
const { peek, isEmpty } = require('../stack-helpers');

function is_balanced(exp) {
  if (!exp) return;

  // reverse the expression before creating a stack
  // to keep expression in correct order
  let reversedExp = '';
  for (let char of exp) {
    reversedExp = char + reversedExp;
  }

  // create a stack based on the expression
  const expStack = new Stack(reversedExp);

  // create a variable to hold the count of open parens
  let balance = 0;

  // hold the check values
  const checkValues = [
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ];

  let node = expStack.top;
  let index = 0; // tracking index for error reporting
  let parenStack = new Stack(); // hold the last paren we saw to check nesting
  let inQuotes = false;

  // loop through the stack, checking each value
  while (node !== null) {

    // grab value of current node
    let char = node.data;

    // if character is a quote, update inQuotes
    if (char === '\'' || char === '"') {
      inQuotes = !inQuotes;
    }

    // only consider parens when not in quotes
    if (!inQuotes) {
      // loop through check values and compare with char
      for (let [openingParen, closingParen] of checkValues) {

        // if char is an opening paren
        if (char === openingParen) {
          parenStack.push(char); // remember that this is what we saw last
          balance++; // increment balance
        
        // if it's a closing paren
        } else if (char === closingParen) {

          // if we don't have an opening paren we saw last
          if (isEmpty(parenStack)) {
            console.log(`Unexpected ${char} at position ${index}`);
            return false;
          }

          // if the matching opening paren matches the last one we saw
          if (openingParen === peek(parenStack)) {
            parenStack.pop(); // forget the last one we saw
            balance--; // decrement balance
          
          // otherwise, incorrect nesting
          } else {
            const expectedParen = checkValues.find(set => set[0] === peek(parenStack))[1];
            console.log(`Expected ${expectedParen} but found ${char} at position ${index}`);
            return false;
          }
        }
      }
    }

    // next index and node
    index++;
    node = node.next;
  }

  if (!isEmpty(parenStack)) {
    let closingParen = checkValues.find(set => set[0] === peek(parenStack))[1];
    console.log(`Missing a ${closingParen} at position ${index}`);
  }

  // the bottom line
  return balance === 0;

}

module.exports = is_balanced;