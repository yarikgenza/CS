const firstUniqChar = function(s) {
  if (!s.length) return -1;

  const hash = new Map();
  const chars = s.split("");

  chars.forEach(char => {
    if (hash.has(char)) {
      hash.set(char, hash.get(char) + 1);
    } else {
      hash.set(char, 1);
    }
  });

  let targetChar;

  for ([key, value] of hash) {
    if (value === 1) {
      targetChar = key;
      break;
    }
  }

  return chars.indexOf(targetChar);
};

console.log(firstUniqChar("hhelo"));
