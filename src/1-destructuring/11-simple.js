const inObj = {
  c: 33,
  d: 44,
  e: {
    w: 1000,
    x: {
      y: 2000,
      z: 3000,
    },
  },
};

// extract props c and d from inObj
const { c, d } = inObj;
console.log('c: ', c);
// output:
// c: 33

console.log('d: ', d);
// output:
// d: 44

// Old way:
// const c = inObj.c;
// const d = inObj.d
