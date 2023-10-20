
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let result = [];

  if (matrix === undefined) {
    return result;
  }
  else {
    for (let i = 0; i < matrix.length; i++) {
      for (let y = 0; y < matrix[i].length; y++) {
        let rowCheck = i % 2;
        if (rowCheck === 0) {
              result.push(matrix[i][y]);
            }
        else {
          if(matrix.length === matrix[i].length) {
            result.push(matrix[i][matrix.length - y - 1]);
            console.log(matrix[i].length + '1');
          }
          else {
            result.push(matrix[i][matrix.length - y]);
              console.log(matrix[i].length + '2');
          }
        }
      }
    } return result;
  }
}


