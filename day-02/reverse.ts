'use strict'
let numbers = [3, 4, 5, 6, 7];
numbers.reverse();
console.log(numbers);
numbers.reverse();
let tempArray = [];
for (let i = 0; i <numbers.length; i++) {
  tempArray[i] = numbers[numbers.length - 1 - i];
}
console.log(tempArray);
