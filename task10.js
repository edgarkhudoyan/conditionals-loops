// Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak = ak-1 + ak-2)
'use strict';
let fibonacci = function (num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

fibonacci(10);
