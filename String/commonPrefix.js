/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = strs => {
  let prefix = "";

  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  strs = strs.sort((a, b) => a.length - b.length); // O(N logN)

  for (i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    let shouldContinue = true;

    for (j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        shouldContinue = false;
        break;
      }
    }

    if (!shouldContinue) {
      return prefix;
    } else {
      prefix += char;
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

/*
 *
 * Runtime complexity: (N logN) + (N * N) -> (N logN + N^2) => O(N^2);
 *
 *
 * Space complexity: N logN
 */
