let grid = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7],
];

let grid2 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9],
];

function validateSudoku(grid) {
  //Row Checker
  for (row = 0; row < 9; row++) {
    for (col = 0; col < 8; col++)
      for (col2 = col + 1; col2 < 9; col2++)
        if (grid[row][col] === grid[row][col2]) return false;
        else if (grid[row][col] === 0) return false;
        else if (grid[row][col2] === 0) return false;
  }
  // Column Checker
  for (col = 0; col < 9; col++)
    for (row = 0; row < 8; row++)
      for (row2 = row + 1; row2 < 9; row2++)
        if (grid[row][col] == grid[row2][col]) return false;
        else if (grid[row][col] === 0) return false;
        else if (grid[row2][col] === 0) return false;

  // Grid Checker - Divided in 3 by 3 grids, row and col is start of the 3 by 3 grid
  for (row = 0; row < 9; row += 3)
    for (col = 0; col < 9; col += 3)
      for (pos = 0; pos < 8; pos++)
        for (pos2 = pos + 1; pos2 < 9; pos2++)
          if (
            grid[row + (pos % 3)][col + pos / 3] ===
            grid[row + (pos2 % 3)][col + pos2 / 3]
          )
            return true;
}

console.log(validateSudoku(grid));

console.log(validateSudoku(grid2));
