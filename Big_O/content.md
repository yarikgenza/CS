# Big O

## Time complexity

> It's a way to mathematically describe how runtime is dependent on the input size;

---

**Types (sorted by speed, dec. order):**

- Constant time:

  - **O(1)**
  - Doesn't matter, how large is input, algorithm will be executed with the same runtime.
  - Example: `(input) => { console.log(input) }`

- Logarithmic time:

  - **O(Log N)**
  - Runtime is calculated from the Log of input size. Example -> iteration with division in half (length / 2);
  - Example: Binary search

- Linear time:

  - **O(N)**
  - Execution time is linearly proportional for the input size
  - Example: simple fn with `for (i = 0; i < array.length; i++)`;

- Quadratic time:

  - **O(N^2)**
  - Execution time increases quadratically to input size
  - Example: Loop + inner loop (same arr)

- Cubic time:

  - **O(N^3)**
  - Execution time is cubic-dependent on input size
  - Example: loop that includes inner loop that includes inner loop

- Factorial time:
  - **O(!N)**
  - Execution time is dependent on input size factorial
  - Example: -. O(!N) algo.s are not optimal

---

### Concepts

> Drop constants

```JS
const fn = (array) => {
  array.forEach(i => console.log('Action 1', i);
  array.forEach(i => console.log('Action 2', i))
}
```

Time complexity is [action 1 + action 2] => `O(N + N)` => `O(2N)`

Then, we **should drop constants**: `O(2N)` => `O(N)`;

Final time complexity is `O(N)`

---

> Drop not significant consts

```JS
const fn = (array) => {
   console.log(array); // O(1);

   for (i = 0; i < array.length; i++) { // O(N)
     console.log(array[i]);
   }

   for (i = 0; i < array.length; i++) { // O(N^2)
     for (j = 0; j < array.length; j++) {
       console.log('Inner loop...');
     }
   }
}
```

Time complexity is `O(1)` + `O(N)` + `O(N^2)` => `O(1 + N + N^2)`

But we do only care about valuable complexity, what `O(N^2)` here is.

Thus, final runtime of this algo: `O(N^2)`;

---

### Big O of popular algorithms: [Cheat Sheet](http://bigocheatsheet.com)
