const uniqueLetters = str => {
  if (!str.length) return true;

  const checkedLetters = [];
  const charArray = str.split("");

  let isUnique = true;

  for (i = 0; i < charArray.length; i++) {
    if (checkedLetters.indexOf(charArray[i]) === -1) {
      checkedLetters.push(charArray[i]);
    } else {
      isUnique = false;
      break;
    }
  }

  return isUnique;
};

console.log(uniqueLetters("abcde")); // true
console.log(uniqueLetters("abcdebop")); // false, as 'b' appears twice here..

// Time complexity: O(N)
