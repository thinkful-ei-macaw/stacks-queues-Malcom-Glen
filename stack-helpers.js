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

// Remove McCoy from your stack and display the stack
exports.remove = (stack, data) => {

  // don't run if stack is empty
  if (stack.top === null) return;

  let found = false;
  let node = stack.top;
  while (node !== null && found === false) {
    if (node.data === data) found = true;
    node = node.next;
  }

  // don't continue if item wasn't found
  if (found === false) return;

  // start again at the top
  node = stack.top;
  let prevNode = stack.top;
  while (node !== null) {

    // found the item
    if (node.data === data) {
      if (stack.top === node) {
        // pop if the node was at the top
        stack.pop();

      } else {
        // otherwise, change the next of the previous node
        prevNode.next = node.next;

      }

      return node.value;
    }
    prevNode = node;
    node = node.next;
  }

};

// there is no way to remove an item from a stack ???????