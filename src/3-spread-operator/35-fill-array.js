// create new array and fill it with numbers from 0 to 9
let newArr = [...Array(10).keys()];
console.log('newArr :', newArr);
// output:
// newArr : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// disection:
// Array(10) creates a empty array of lenght 10
// .keys() extracts the new array's keys. The "keys" of an array are it's indexes
// [...newArray] spread the new array into a brand new array
// let newArray =     assign the result to newArr variable

// create new array and fill it with the letters
// of the Latin alphabet uppercase
newArr = [...Array(26)].map((v, i) => String.fromCharCode(i + 65));
console.log('newArr :', newArr);
// output:
// arr : [
//   'A', 'B', 'C', 'D', 'E', 'F',
//   'G', 'H', 'I', 'J', 'K', 'L',
//   'M', 'N', 'O', 'P', 'Q', 'R',
//   'S', 'T', 'U', 'V', 'W', 'X',
//   'Y', 'Z'
// ]
