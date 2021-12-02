// Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same.
'use strict';
let num = 350;

if (num.toString().split('')[-1] === 0) {
  console.log(num);
} else {
  console.log(num.toString().split('').reverse().join(''));
}
