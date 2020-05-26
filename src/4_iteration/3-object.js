// ----------------
// iterate object
const inObj = {
  a: '111',
  b: '222',
  c: '333',
  d: '444',
  e: '555',
};
// for (let key in inObj) {
//   console.log(key);
// }

// ----------------
// own props vs. inherited
const getAllPropNames = (obj) => {
  let result = new Set();
  while (obj) {
    Object.getOwnPropertyNames(obj).map((p) => result.add(p));
    obj = Object.getPrototypeOf(obj);
  }
  return [...result];
};
console.table(getAllPropNames(inObj));

// const inArr = [1, 2, 3, 4, 5];
// console.table(getAllPropNames(inArr));
