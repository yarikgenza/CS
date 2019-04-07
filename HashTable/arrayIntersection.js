/*

Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]

*/

var intersect = function(nums1, nums2) {
  const common = new Map();

  nums1.forEach(num => {
    if (nums2.indexOf(num) !== -1) {
      if (common.has(num)) {
        common.set(num, common.get(num) + 1);
      } else {
        common.set(num, 1);
      }
      delete nums2[nums2.indexOf(num)];
    }
  });

  const result = [];

  for ([key, value] of common) {
    for (i = 0; i < value; i++) {
      result.push(key);
    }
  }

  return result;
};

// N + N * M

console.log(intersect([1, 2, 2, 1], [2, 2]));
