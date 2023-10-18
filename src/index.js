
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let result = [];

  for (let y = 0; y < matrix.length; y++) {
    for (let g = 0; g < matrix[y].length; g++) {
      let rowCheck = y % 2;
      if (rowCheck === 0) {
        result.push(matrix[y][g]);
      } else {
        result.push(matrix[y][matrix.length-g-1]);
      }
    }
  } return result;

}
