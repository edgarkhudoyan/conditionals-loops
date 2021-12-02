// Given three numbers. Sort them by the ascending order.
'use strict';

let arr1 = [45, 126, 78];
let arr2 = [-23, -456, 0];

let sorted = arr1.sort((a, b) => {
  return a - b;
});
console.log(sorted);
