var firstUniqChar = function(s) {
  // Generate hash-table

  if (!s.length) return -1;

  const hash = {};
  const chars = s.split("");

  chars.forEach(char => {
    if (hash[char] !== undefined) {
      hash[char] = hash[char] + 1;
    } else {
      hash[char] = 1;
    }
  });

  const pairs = Object.entries(hash).find(i => i[1] === 1);
  const targetChar = pairs ? pairs[0] : undefined;

  return chars.indexOf(targetChar);
};

console.log(firstUniqChar("hhelo"));
