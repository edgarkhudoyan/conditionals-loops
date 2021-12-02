// Find the sign of product of three numbers without multiplication operator. Display the specified sign.
'use strict';
let products = [-4, 5, 3];

let sum = products.reduce((cur, acc) => {
  return cur * acc;
});

if (sum === 0) console.log('unsigned');
else if (sum > 0) console.log('+');
else console.log('-');
