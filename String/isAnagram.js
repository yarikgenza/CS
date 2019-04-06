/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// TODO: Use hashtable

// * Time complexity: N log(n)

const isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const sChars = s.split("");
  const tChars = t.split("");

  sChars.sort();
  tChars.sort();

  for (i = 0; i < sChars.length; i++) {
    if (sChars[i] !== tChars[i]) {
      return false;
    }
  }

  return true;
};
