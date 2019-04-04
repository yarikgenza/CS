/*
 * We can use extra space up to O(N)
 * Runtime complexity: O(N)
 * Space complexity: O(1)
 * Extra memory: O(M);
 */

const reverseString = str => {
  const chars = str.split("");

  let reversedChars = [];

  for (i = chars.length; i > -1; i--) {
    reversedChars.push(chars[i]);
  }

  return reversedChars.join("");
};

console.log(reverseString("hello"));

/*
 * We !can't! use extra space
 * Runtime complexity: O(N)
 * Space complexity: O(1)
 * Extra memory: O(1);
 */

const inPlaceReverse = arr => {
  for (i = 0; i < Math.floor(arr.length - 1) / 2; i++) {
    let targetIndex = arr.length - 1 - i;
    let initElement = arr[i];
    arr[i] = arr[targetIndex];
    arr[targetIndex] = initElement;
  }

  return arr;
};

console.log(inPlaceReverse(["h", "e", "l", "l", "o"]));
