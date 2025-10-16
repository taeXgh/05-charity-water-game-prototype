function updateGrid() {
  const container = document.getElementById('grid-container');
  container.innerHTML = ''; //Clear older tiles

  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      const tile = document.createElement('div');
      tile.classList.add('grid-tile');
      tile.textContent = grid[r][c] === 0 ? '' : grid[r][c];
      container.appendChild(tile);
    }

}
}