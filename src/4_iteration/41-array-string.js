// iterate Array elements
const inArr = ['a', 'b', 'c', 'd', 'e'];
for (let value of inArr) {
  console.log(value);
}
// output:
// a
// b
// c
// d
// e

// iterate array elements, extract index and value
for (let [index, value] of inArr.entries()) {
  console.log(`index: ${index}, value: ${value}`);
}
// output:
// index: 0, value: a
// index: 1, value: b
// index: 2, value: c
// index: 3, value: d
// index: 4, value: e

// disection:
// inArr.entries() <-- returns an array of arrays from the original
// [
//   [0, 'a']
//   [1, 'b'],
//   etc.
// ]
// for (let ... of ...) <-- iterate through the array of arrays
// [index, value] <-- from each element (inner array), destructure element 0 into variable index, and element 1 into variable value

// iterate string
const inStr = 'supercalifragelistic';
for (let char of inStr) {
  console.log(char);
}
// output:
// s
// u
// p
// e
// r
// c
// a
// l
// i
// f
// r
// a
// g
// e
// l
// i
// s
// t
// i
// c
