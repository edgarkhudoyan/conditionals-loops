// Enter a number. Reverse its first and last digits. Print the new number.
'use strict';

let num = 895796;

let toArr = num.toString().split('');

let toFirst = toArr.pop();
let toLast = toArr.shift();

console.log(`${toFirst} ${toArr} ${toLast}`);
