/**
 * @param {string} s
 * @return {boolean}
 */

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  isEmpty() {
    return !this.data.length;
  }
}

var isValid = function(s) {
  const chars = s.split("");
  const stack = new Stack();

  let isValid = true;

  for (char of chars) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")") {
      const target = stack.pop();
      if (target !== "(") {
        isValid = false;
        break;
      }
    } else if (char === "]") {
      const target = stack.pop();
      if (target !== "[") {
        isValid = false;
        break;
      }
    } else if (char === "}") {
      const target = stack.pop();
      if (target !== "{") {
        isValid = false;
        break;
      }
    }
  }

  return stack.isEmpty() && isValid;
};
