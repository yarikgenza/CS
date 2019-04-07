/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function(s, t) {
  const mapping = new Map();
  const used = new Set();

  for (i = 0; i < s.length; i++) {
    if (mapping.has(s[i])) {
      const isCorrect = mapping.get(s[i]) === t[i];
      if (!isCorrect) return false;
    } else {
      if (used.has(t[i])) return false;
      mapping.set(s[i], t[i]);
      used.add(t[i]);
    }
  }

  return true;
};
