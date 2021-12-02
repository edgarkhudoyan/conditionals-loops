// Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise.
'use strict';

const number = parseInt(prompt('Enter a number'));

if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      alert('No');
      break;
    } else {
      alert('Yes');
      break;
    }
  }
}
