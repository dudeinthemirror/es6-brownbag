const obj1 = { a: 1, b: 2 };

const obj2 = { c: 3, d: 4 };

const obj3 = { a: 100, x: 200 };

const obj4 = {
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

let combined;
// ---------------------
// disjunct keys
combined = { ...obj1, ...obj2 }; // Object.assign({}, obj1, obj2);
console.log(combined);

// ---------------------
// common keys
// combined = { ...obj1, ...obj3 }; // the second object values prevail
// console.log(combined);

// combined = { ...obj2, ...obj4 };
// console.log(combined);

// console.log(JSON.stringify(combined, null, '    '));
// console.table(combined);
