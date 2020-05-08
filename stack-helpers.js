/* eslint-disable no-console */
// Using the Stack class above, implement the following helper functions outside of the class:
// peek(): allows you to look at the top of the stack without removing it
exports.peek = (stack) => {
  return stack.top && stack.top.data;
};

// isEmpty(): allows you to check if the stack is empty or not
exports.isEmpty = (stack) => {
  return stack.top === null;
};

// display(): to display the stack - what is the 1st item in your stack?
exports.display = (stack) => {
  let node = stack.top;

  // keep going until we have no nodes left
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
};