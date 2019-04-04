/*
 * Return index of first substring occurence
 */

const strStr = (haystack, needle) => {
  if (needle.length === 0) return 0;

  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substr(i, needle.length) === needle) {
        return i;
      }
    }
  }

  return -1;
};

console.log(strStr("Hello", "ll"));

// * Time complexity: 0(N); space complexity: O(N);
