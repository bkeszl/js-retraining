'use strict'
let matrix = [];
for (let i = 0; i < 4; i++) {
    let arrayRow = [];
    for (let j = 0; j < 4; j++) {
      if (4 - i === j + 1) {
        arrayRow.push(1);
      } else {
        arrayRow.push(0)
      }
    }
    matrix.push(arrayRow);
}
console.log(matrix);
