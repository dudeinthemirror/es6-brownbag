const inArr = [10, 20, 30, 40, 50];

const [ten, twenty, ...tail] = inArr;

console.log(ten);
console.log(twenty);
console.log(tail);

// const [, , , forty, fifty] = inArr;
// console.log(fifty);
// console.log(forty);

// using pop() !! changes inArr !!
// console.log(inArr.pop());
// console.log(inArr.pop());
