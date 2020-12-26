let inArr = [10, 20, 30, 40, 50];

// extract first two elements from array inArr
// extract all the rest of the elements in a
// variable called tail
const [ten, twenty, ...tail] = inArr;

console.log('ten:', ten);
// output:
// ten: 10

console.log('twenty :', twenty);
// output:
// twenty: 20

console.log('tail :', tail);
// output:
// tail : [ 30, 40, 50 ]

// extract the last two elements from array
// discard the first three
const [, , , forty, fifty] = inArr;
console.log('fifty:', fifty);
// output:
// fifty: 50

console.log('forty:', forty);
// output:
// forty: 40

// Alternative for extracting the first two elements
// using pop()
// !!! 🚩 pop will mutate the original array!
// usually not a good idea
inArr = [10, 20, 30, 40, 50];
const last = inArr.pop();
console.log('last: ', last);
// output:
// last: 50

const secondLast = inArr.pop();
console.log('secondLast: ', secondLast);
// output:
// secondLast: 40

console.log("inArr after 2 pop's :", inArr);
// output:
// inArr after 2 pop's : [ 10, 20, 30 ]

// Alternative for extracting the last two elements
// using shift()
// !!! 🚩 shift will mutate the original array!
// usually not a good idea
inArr = [10, 20, 30, 40, 50];
const first = inArr.shift();
console.log('first: ', first);
// output:
// first: 10

const second = inArr.shift();
console.log('second: ', second);
// output:
// second: 20

console.log("inArr after 2 shift's :", inArr);
// output:
// inArr after 2 shift's : [ 30, 40, 50 ]
