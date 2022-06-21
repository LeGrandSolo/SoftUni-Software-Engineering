function orbit(input) {
  const [dimentionX, dimentionY, starY, starX] = input;
  const matrix = new Array(dimentionY)
    .fill("Empty")
    .map((_) => new Array(dimentionX).fill("Empty"));
  matrix[starY][starX] = 1;
  let power = 1;
  while (power < dimentionY) {
    for (let i = 0; i < dimentionY; i++) {
      for (let j = 0; j < dimentionX; j++) {
        if (matrix[i][j] === "Empty") {
          if (matrix[i - 1]) {
            if (matrix[i - 1][j] === power) {
              matrix[i][j] = power + 1;
            }
            if (matrix[i - 1][j - 1]) {
              if (matrix[i - 1][j - 1] === power) {
                matrix[i][j] = power + 1;
              }
            }
            if (matrix[i - 1][j + 1]) {
              if (matrix[i - 1][j + 1] === power) {
                matrix[i][j] = power + 1;
              }
            }
          }
          if (matrix[i + 1]) {
            if (matrix[i + 1][j] === power) {
              matrix[i][j] = power + 1;
            }
            if (matrix[i + 1][j - 1]) {
              if (matrix[i + 1][j - 1] === power) {
                matrix[i][j] = power + 1;
              }
            }
            if (matrix[i + 1][j + 1]) {
              if (matrix[i + 1][j + 1] === power) {
                matrix[i][j] = power + 1;
              }
            }
          }
          if (matrix[i][j + 1]) {
            if (matrix[i][j + 1] === power) {
              matrix[i][j] = power + 1;
            }
          }
          if (matrix[i][j - 1]) {
            if (matrix[i][j - 1] === power) {
              matrix[i][j] = power + 1;
            }
          }
        }
      }
    }
    power++;
  }
  for (const row of matrix) {
    console.log(row.join(" "));
  }
}
orbit([7, 7, 0, 0]);
orbit([5, 5, 2, 2]);
