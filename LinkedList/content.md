# Linked List

A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.

In simple words, a linked list consists of nodes where each node contains a `data` field and a `reference(link) to the next node` in the list.

---


###

Types of Linked List:

* Single-linked list (`1 -> 2 -> 3 -> null`)
* Double-linked list (`1 <=> 2 <=> 3 <=> null`)
* Circular-list (contains loop) (`1 -> 2 -> 3 -> 4(contais reference to 2`));

---

### Array vs Linked List

1) Access [by index/random]
   Array - O(1)
   Linked List - O(N)
2) Insertion/Deletion
   Array - O(N)
   Linked List - O(N)

      BUT Linked List is better with memory usage.

---

### Linked list example

Visualisation: [head] `1 -> 2 -> 3 -> 5 -> 4 -> NULL` [tail];
Code:

```JS
head: {
  data: 1,
  next: <reference to the next node>
}
```
---


### Linked List basic methods

* **Iteration**
  * Go from head to the last note (that has the `next` === `null`)


* addToHead(data)
* addToTail(data)
* addAt(index, data)
* removeAt(index, data)
---


### Node implementation

```JS

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
```

---

### Linked list implementation

```JS

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  addToHead(data) {
    const node = new Node(data);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
  }
}
```

---



### **Two pointers technique**




Example: find the linked list midpoint:


```JS
const midpoint = head => {
  let slow = head;
  let fast = head;

  while(fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
```

Example: detect if there is a loop in the linked list;

> This problem can also be solved using Set

```JS
const hasLoop = head => {
  let slow = head;
  let fast = head;

  while(fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
}
```

---

### Common Linked List sproblems

- Check if list contains a loop (2-pointer technique)
- Find midpoint of list (2-pointer technique)
- Sort a linked list
- Reverse a linked list
- Add two numbers
- Find the N-th node from the end (2-p. technique, but with stepSize=1, + initial slide for the `fast` pointer);

---

### Tips

- To reverse the linked list, we need to
  - one
  - two
  - three
- To sort the linked list, we need to
  - one
  - two
  - three
- Linked List can support `for...of` if the class implements `[Symbol.iterator]*()` generator.