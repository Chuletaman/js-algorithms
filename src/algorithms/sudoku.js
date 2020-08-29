export default function sudoku(grid) {
  const checkColumns = () => {
    for (let row = 0; row < 9; row++) {
      const columnDataSet = new Set();
      for (let column = 0; column < 9; column++) {
        if (grid[row][column] === ".") continue;

        if (columnDataSet.has(grid[row][column])) return false;
        columnDataSet.add(grid[row][column]);
      }

      columnDataSet.clear();
    }

    return true;
  };

  const checkRows = () => {
    for (let column = 0; column < 9; column++) {
      const rowDataSet = new Set();
      for (let row = 0; row < 9; row++) {
        if (grid[row][column] === ".") continue;

        if (rowDataSet.has(grid[row][column])) return false;
        rowDataSet.add(grid[row][column]);
      }

      rowDataSet.clear();
    }

    return true;
  };

  const checkBlocks = () => {
    for (let block = 0; block < 9; block++) {
      const blockIndexData = [
        { row: 0, col: 0 },
        { row: 0, col: 3 },
        { row: 0, col: 6 },
        { row: 3, col: 0 },
        { row: 3, col: 3 },
        { row: 3, col: 6 },
        { row: 6, col: 0 },
        { row: 6, col: 3 },
        { row: 6, col: 6 },
      ];

      const blockDataSet = new Set();
      for (
        let row = blockIndexData[block].row;
        row < 3 + blockIndexData[block].row;
        row++
      ) {
        for (
          let column = blockIndexData[block].col;
          column < 3 + blockIndexData[block].col;
          column++
        ) {
          if (grid[row][column] === ".") continue;

          if (blockDataSet.has(grid[row][column])) return false;
          blockDataSet.add(grid[row][column]);
        }
      }
      blockDataSet.clear();
    }
    return true;
  };

  return checkColumns() && checkRows() && checkBlocks();
}

export const testCase = [
  [".", ".", ".", "1", "4", ".", ".", "2", "."],
  [".", ".", "6", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "1", ".", ".", ".", ".", ".", "."],
  [".", "6", "7", ".", ".", ".", ".", ".", "9"],
  [".", ".", ".", ".", ".", ".", "8", "1", "."],
  [".", "3", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", "7", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", "7", "."],
];
