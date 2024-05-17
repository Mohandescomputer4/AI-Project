function divide(grid, startX, startY, width, height, horizontal) {
  if (width < 3 || height < 3) return;
  if (horizontal) {
    const center_row = Math.round(height / 2);
    const random_col = Math.round(startX + Math.random() * (width - startX));
    let x = null;
    for (let col = startX; col < width; col++) {
      if (col != random_col) {
        grid.setBlock(center_row, col);
      } else {
        grid.setClear(center_row, col);
        x = col;
      }
    }
    divide(grid, startX, startY, x - 1, random_col - 1, false);
  } else {
    const center_col = Math.round(width / 2);
    const random_row = Math.round(startY + Math.random() * (height - startY));
    for (let row = startX; row < width; row++) {
      if (row != random_row) {
        grid.setBlock(row, center_col);
      } else {
        grid.setClear(row, center_col);
      }
    }
  }
}