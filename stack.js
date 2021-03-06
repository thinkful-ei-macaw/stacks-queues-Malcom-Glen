// Write a Stack class with its core functions (push, pop) from scratch.
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(values = []) {
    this.top = null;

    // prevent creating values with non iterable data types
    if (!Array.isArray(values) && typeof values !== 'string') return;

    // iterates through values provided and pushes onto stack
    for (let value of values) {
      this.push(value);
    }
  }

  push(data) {
    // no need to check if top is null
    // because we're reassigning it anyway
    const node = new _Node(data, this.top);
    this.top = node;

    return this.top;
  }

  pop() {
    // don't try and remove anything
    // if there's nothing in the stack
    if (this.top === null) return;

    const node = this.top;
    this.top = node.next;

    return node.data;
  }
}

module.exports = Stack;