var containsNearbyDuplicate = function(nums, k) {
  if (nums.length <= 1) return false;
  const iTable = new Map();

  let contains = false;

  nums.forEach((num, index) => {
    if (iTable.has(num)) {
      const oldIndex = iTable.get(num);
      if (index - oldIndex <= k) {
        contains = true;
      }
      iTable.set(num, index);
    } else {
      iTable.set(num, index);
    }
  });

  return contains;
};

// Worst case: O(N)

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
