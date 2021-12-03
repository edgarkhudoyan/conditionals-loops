// Given an array of numbers and a number. Find the index of a first element which is equal to that number. If there is not such a number, that find the index of the first element which is the closest to it.
let list = [21, -9, 15, 2116, -71, 33];
let num = 15;

for (let e of list) {
  let index = list.indexOf(num);
  if (num === e) {
    console.log(index);
  }
}
