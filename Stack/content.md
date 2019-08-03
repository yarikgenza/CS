# Stack

Stack is basically an array that follows `FILO` (First in - Last out) principle.

***

### Stack basic methods:

  * `Push`  -> add to the 'top' of stack.
  * `Pop`   -> remove from the 'top' of stack

Additional methods:   `isEmpty`, `isFull`, .etc;

*** 

### `FILO`

> First in - Last out

The record that was added to the stack first - will be processed last. Like the one-side opened box, so we can `pop` and `push` only from the one side.

---

### JS implementation

```JS
class Stack {
  constructor() {
    this.data = [];
  }

  push(item) {
    this.data.push(item);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const s = new Stack();
  s.push(1);
  s.push(2);
  s.pop(); // returns 2
  s.pop(); // returns 1
```

---

### Common problems:

- Check for balanced parentheses
- BST (BInary Search Tree) iterator

---

Tips:

- Fits good in combination with tree's
