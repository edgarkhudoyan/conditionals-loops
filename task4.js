// Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
'use strict';
let enterNumber = parseInt(prompt('Please enter a number'));

if (enterNumber % 7 == 0 && enterNumber % 5 == 0) {
  alert(`${enterNumber} is a multiple of 7 and 5`);
}
