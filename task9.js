// Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise.
'use strict';
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
    else return num > 1;
  }
}

isPrime(13);
