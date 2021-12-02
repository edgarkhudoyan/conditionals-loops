// Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the numbers in a separate array. Arrange them such as from the beginning are the odds and from the ending the evens.
'use strict';
let mixedArr = [8, 0, 1, 'hey', 12, 5, true, '2', null, 7, 3];

let filteredArr = mixedArr.filter((item) => {
  return typeof item === 'number';
});
