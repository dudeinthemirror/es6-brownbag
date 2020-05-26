const inArr = [10, 20, 30, 40, 50];

const [ten, twenty, ...tail] = inArr;

// console.log('ten :', ten);
// console.log('twenty :', twenty);
// console.log('tail :', tail);

// const [, , , forty, fifty] = inArr;
// console.log('fifty :', fifty);
// console.log('forty :', forty);

// console.log(inArr.pop());
// console.log(inArr.pop());
// console.log("inArr after pop's :", inArr); // using pop changes original inArr !!
