// Move the first item to the last position
const inArr = [1, 2, 3, 4];
const moveFirstToLast = ([head, ...tail]) => [...tail, head];

const shifted = moveFirstToLast(inArr);
console.log('shifted: ', shifted);
// output:
// shifted:  [ 2, 3, 4, 1 ]
