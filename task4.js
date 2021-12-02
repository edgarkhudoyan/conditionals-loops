// Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
'use strict';
let enterNumber = parseInt(prompt('Please enter a number'));

if (enterNumber % 3 != 0 && enterNumber % 5 != 0 && enterNumber % 7 != 0) {
  alert(`${enterNumber} is not a multiple of 3, 5 or 7`);
} else if (
  enterNumber % 3 == 0 &&
  enterNumber % 5 == 0 &&
  enterNumber % 7 == 0
) {
  alert(`${enterNumber} is a multiple of 3, 5 and 7`);
} else if (enterNumber % 7 == 0 && enterNumber % 5 == 0) {
  alert(`${enterNumber} is a multiple of 7 and 5`);
} else if (enterNumber % 3 == 0 && enterNumber % 7 == 0) {
  alert(`${enterNumber} is a multiple of 3 and 7`);
} else if (enterNumber % 3 == 0) {
  alert(`${enterNumber} is a multiple of 3`);
}
