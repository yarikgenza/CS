/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const hash = str =>
    str
      .split("")
      .sort()
      .join("");

  const anagrams = new Map();

  strs.forEach(str => {
    const key = hash(str);

    if (anagrams.has(key)) {
      const strings = anagrams.get(key);
      strings.push(str);
      anagrams.set(key, strings);
    } else {
      anagrams.set(key, [str]);
    }
  });

  return Array.from(anagrams.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
