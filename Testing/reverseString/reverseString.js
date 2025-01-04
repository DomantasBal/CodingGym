// Case 1
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Case 2
// function reverseString(str) {
//   let reversed = '';

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

module.exports = reverseString;
