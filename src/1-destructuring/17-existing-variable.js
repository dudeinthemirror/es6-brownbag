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

let d = 'FourFour';

// assign a new value to the existing variable d
// by extracting a prop with the same name from inObj
({ d } = inObj);

console.log('d:', d);
// output:
// d: 44

// Old way:
// let d = "FourFour";
// d = inObj.d;
