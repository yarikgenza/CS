/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  const numMap = new Map();

  for (i = 0; i < nums.length; i++) {
    const comp = target - nums[i];

    if (numMap.has(comp)) {
      return [i, numMap.get(comp)];
    }

    numMap.set(nums[i], i);
  }
};

// O(N); Linerar
// Space is O(1)
