// Given an array of strings and numbers. Print the number of integers and the number of strings in the array.
'use strict';

let arr = [1, '10', 'hi', 2, 3];

let nums = arr.filter((item) => {
  return typeof item === 'number';
});

let strings = arr.filter((item) => {
  return typeof item === 'string';
});
console.log(strings);
