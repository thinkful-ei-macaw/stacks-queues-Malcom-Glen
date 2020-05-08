// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(values = []) {
    this.top = null;

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