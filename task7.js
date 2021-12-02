// Insert a digit and a number. Check whether the digits contains in the number or not.
let digit = parseInt(prompt('Please insert a digit'));
let number = parseInt(prompt('Please insert a number'));

let str = number.toString().split('').join('');

if (str.includes(digit)) alert('Yes');
else alert('No');
