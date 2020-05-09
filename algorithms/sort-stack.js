/* eslint-disable no-console */
// Write a program to sort a stack such that the smallest items are on the top (in ascending order).
// You can use an additional stack, but you may not use any other data structure
// (such as an array, or linked list).
const Stack = require('../stack');

function sort_stack(stack, runs = 0) {
  // bubble sort (recusrive, expensive, delicious)
  let node = stack.top;
  let prevNode = stack.top;
  let swaps = 0;
  let index = 0;

  let temp = new Stack();

  while (node !== null) {
    // only run this logic if we're not at the top of the stack
    if (stack.top !== node) {

      // if current node data is less than previous node
      if (node.data < prevNode.data) {

        // remove everything before the previous node
        for (let i = 0; i < index - 1; i++) {
          temp.push(stack.pop());
        }

        // remove previous and current node
        stack.pop();
        stack.pop();

        // add them back, but swapped
        stack.push(prevNode.data);
        stack.push(node.data);

        // add everything else back in
        for (let i = 0; i < index - 1; i++) {
          stack.push(temp.pop());
        }

        swaps++;
      }
    }

    index++;
    prevNode = node;
    node = node.next;
  }

  if (swaps > 0) {
    console.log('reached end of stack, start over', '\n');
    return sort_stack(stack, ++runs);
  }

  console.log(`completed in ${runs} operations`);
  return stack;

}

module.exports = sort_stack;