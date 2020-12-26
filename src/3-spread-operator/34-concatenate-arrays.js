let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

const result = [...arr1, ...arr2]; // same as old: arr1.concat(arr2)

console.log('result: ', result);
// output:
// result: [ 0, 1, 2, 3, 4, 5 ]
