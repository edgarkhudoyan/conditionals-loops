// Enter a number. Reverse its first and last digits. Print the new number.
'use strict';

let num = 895796;

let toArr = num.toString().split('');

let firstItem = toArr.pop();
let lastItem = toArr.shift();

console.log(`${firstItem} ${toArr} ${lastItem}`);
