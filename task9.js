// Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise.
'use strict';
let num = 14;

if (num % num === 0 && num % 1 === 0) {
  console.log('Yes');
} else if (num % num === 1) {
  console.log('No');
}
