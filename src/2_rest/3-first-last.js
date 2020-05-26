// Move the first item to the last position
const inArr = [1, 2, 3, 4];
const shiftToLast = ([head, ...tail]) => [...tail, head];

const shifted = shiftToLast(inArr);
console.log('shifted: ', shifted);
