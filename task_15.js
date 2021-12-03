// Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of their lengths.
'use strict';

function displayNum(i) {
  let findLenght = i.map((item) => {
    return item.length;
  });
  let maximum = Math.max(...findLenght);
  let minimum = Math.min(...findLenght);
  return maximum + minimum;
}

let number = displayNum([
  'wish',
  'slightly',
  'understand',
  'longer',
  'unexpected',
  'heart',
]);

console.log(number);
