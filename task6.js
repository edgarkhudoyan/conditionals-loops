// Find the sign of product of three numbers without multiplication operator. Display the specified sign.
'use strict';
let products = [0, 5, 3];

let sum = products.reduce((cur, acc) => {
  return cur * acc;
});
console.log(sum);
