// Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same.
'use strict';
let num = 750;

let toArr = num.toString().split('');
let reversed = num.toString().split('').reverse().join('');

if (toArr[toArr.length - 1] != '0') {
  console.log(reversed);
} else {
  console.log(num);
}
