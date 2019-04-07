# HashTable

Hash Table is a data structure which organizes data using `hash` functions in order to support quick insertion and search

> Python dicts are actually hash-tables

> In JS, objs are NOT has-tables, use `Map()` and `Set()` accord.

---

### Main idea

The key idea of Hash Table is to use a hash function to map keys to buckets. To be more specific,

When we insert a new key, the hash function will decide which bucket the key should be assigned and the key will be stored in the corresponding bucket;
When we want to search for a key, the hash table will use the same hash function to find the corresponding bucket and search only in the specific bucket.

---

### Hash function example

For integers: `y = num % 1000`

---

### Collisions

When hashing functions same has for 2+ keys -> there is a collision.

Therefore, we place a linked-list into the bucket

---

### HashSet

`Set` is used to store `unique` values;

In JS Set supports the following operations:

```JS
const nums = new Set();

s.add(1)
s.has(1) // -> true
s.delete(1)

s.has(1) // -> false
```

---

### HashMap

Maps is used to store `key:value` pairs. Key & value can be any datatype.

Maps are `iterable` (for [key, value] of mapName) )

Supported operations:

```JS
const m = new Map();

m.set('key', 'value');

m.get('key') // -> value

m.has('key') // -> true

m.delete(key);

```

---

### Common HashTable sproblems

- String dublicates
- String + index
- Sum of smth
- Occurencies
