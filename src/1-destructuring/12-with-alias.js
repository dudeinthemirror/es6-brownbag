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
// and assign (alias) them to local
// variables cee and dee
const { c: cee, d: dee } = inObj;
console.log('cee :', cee);
// output:
// cee: 33

console.log('dee :', dee);
// output:
// dee: 44

// Old way:
// const cee = inObj.c;
// const dee = inObj.d;
