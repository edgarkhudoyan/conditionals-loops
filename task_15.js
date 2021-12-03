// Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of their lengths.
'use strict';
let arr = ['anymore', 'raven', 'me', 'communicate'];
let findLenght = arr.map((i) => {
  return i.length;
});

let maximum = Math.max(...findLenght);
let minimum = Math.min(...findLenght);

// console.log(minimum);
