// Given a sentence as a string. Split it according to space and comma and create an array consisting of the words of the array. The last word should not contain the last . or ! .
let str = 'May the Force be with you';

if (str[str.length - 1] === '.' || str[str.length - 1] === '!') {
  let modified = str.slice(0, -1);

  let toArr = modified.split(' ');

  console.log(toArr);
} else {
  console.log(str.split(' '));
}
