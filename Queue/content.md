# Queue

Queue is basically an array with `rear` and `front` that follows `FIFO` (First in - First out) principle.

***

### Queue basic methods:

  * `Enqueue` (add to queue) -> add a record to the queue rear.
  * `Dequeue` (remove from queue) -> remove a record from the queue front

Additional methods:   `isEmpty`, `isFull`, .etc;

*** 

### `FIFO`

> First in - First out

The recont that was added to queue first - will be processed (dequeued) first. Like in the real-life queue;

---

### JS implementation

```JS
class Queue {
  constructor() {
    this.array = [];
  }

  add(item) {
    this.array.unshift(item);
  }

  remove() {
    return this.array.pop();
  }
}

const q = new Queue();
    q.add(1);
    q.remove(); // returns 1;
```

---

### Common problems:

- Circular Queue
- LNU Cache
- Reverse a Queue
- N-Queens    
---

Tips:

- 
