// Log a message to the console to ensure the script is linked correctly
console.log('JavaScript file is linked correctly.');
let grid = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];


function addRandomTile() {
  let emptyTiles = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (grid[r][c] === 0) {
        emptyTiles.push({ r, c });
      }
    }
  }

  if (emptyTiles.length > 0) {
    const { r, c } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    grid[r][c] = 2; // Add the 2 tile
  }

  }


