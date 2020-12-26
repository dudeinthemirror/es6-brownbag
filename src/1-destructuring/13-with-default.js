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

// extract props c and f from inObj
// if f doesn't exist or is undefined
// default it to -999
const { c, f = -999 } = inObj;
console.log('c:', c);
// output:
// c: 33

console.log('f:', f);
// output:
// f: -999

// Old way:
// const c = inObj.c;
// const f = inObj.f || -999;
