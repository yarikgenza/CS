var isValidSudoku = function(board) {
  const areNotDublicated = arr => {
    let containsDublicate = false;

    arr.forEach(sub => {
      const values = new Set();
      sub.forEach(value => {
        if (value === ".") return;
        if (values.has(value)) {
          containsDublicate = true;
        }
        values.add(value);
      });
    });

    return !containsDublicate;
  };

  const areRowsValid = () => {
    return areNotDublicated(board);
  };

  const areColumnsValid = () => {
    const columns = [];
    let isValid = true;
    for (i = 0; i < 9; i++) {
      columns.push(board.map(row => row[i]));
    }
    return areNotDublicated(columns);
  };

  const areBoxesValid = () => {
    const boxes = [];
    for (i = 0; i < 3; i++) {
      const one = [];
      const two = [];
      const three = [];
      for (j = i * 3; j < i * 3 + 3; j++) {
        one.push(board[j][0], board[j][1], board[j][2]);
        two.push(board[j][3], board[j][4], board[j][5]);
        three.push(board[j][6], board[j][7], board[j][8]);
      }
      boxes.push(one, two, three);
    }

    return areNotDublicated(boxes);
  };

  return areRowsValid() && areColumnsValid() && areBoxesValid();
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ])
);
