const getTotalIsles = function (grid) {
  // write your code here

  if (!grid || grid.length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  // Directions for up, down, left, and right
  const directions = [
    [-1, 0], // Up
    [1, 0],  // Down
    [0, -1], // Left
    [0, 1]   // Right
  ];

  // Helper function for Depth-First Search
  function dfs(r, c) {
    // Base case: if out of bounds or water, return
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
      return;
    }
    // Mark the current cell as visited by setting it to 'W'
    grid[r][c] = 'W';
    // Explore all four directions
    for (let [dr, dc] of directions) {
      dfs(r + dr, c + dc);
    }
  }

  // Loop through the grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // If we find an unvisited land ('L'), start a DFS
      if (grid[r][c] === 'L') {
        dfs(r, c);
        islandCount++; // Increment the island count
      }
    }
  }

  return islandCount;

};

module.exports = getTotalIsles;