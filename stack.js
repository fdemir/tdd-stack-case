class Stack {
  constructor() {
    // points to top element of index
    this.top = 0;
    // stored value
    this.data = [];
  }

  /**
   * Add an elements to stack
   * @param {any} element
   */
  push(element) {
    // increase the top value
    this.top++;
    this.data.push(element);
  }

  /**
   * Delete an element from the stack
   * @returns {any} popped element
   */
  pop() {
    if (this.isEmpty() === false) {
      this.top--;
      return this.data.pop();
    }
  }

  /**
   * get the top element of the stack
   * @returns {any}
   */
  peek() {
    return this.data[this.top - 1];
  }

  /**
   * Check if stack is empty
   * @returns {boolean}
   */
  isEmpty() {
    return this.top === 0;
  }

  /**
   * Return the length of the stack
   * @returns {number}
   */
  length() {
    return this.data.length;
  }

  /**
   * print the elements
   */
  print() {
    console.log(this.data);
  }
}

module.exports = Stack;
