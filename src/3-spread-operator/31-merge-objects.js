let merged;

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

// merge 2 objects into a new one
// the 2 objects have no common props
merged = { ...obj1, ...obj2 }; // old way: Object.assign({}, obj1, obj2);
console.log(merged);
// output:
// { a: 1, b: 2, c: 3, d: 4 }

// merge 2 objects into a new one
// the 2 objects have some common props (a)
merged = { ...obj1, ...obj3 }; // the second object values will prevail
console.log(merged);
// output:
// { a: 100, b: 2, x: 200 }

// merge 2 objects into a new one
// the 2 objects have some common props (c, d)
merged = { ...obj2, ...obj4 }; // the second object values will prevail
console.log(merged);
// output:
// { c: 33, d: 44, e: { w: 1000, x: { y: 2000, z: 3000 } } }

// Unrelated: alternative ways to display result
console.log(JSON.stringify(merged, null, '    '));
// output:
// {
//   "c": 33,
//   "d": 44,
//   "e": {
//       "w": 1000,
//       "x": {
//           "y": 2000,
//           "z": 3000
//       }
//   }
// }
console.table(merged);
// output:
// ┌────────┬──────┬───────────────────┬───────┐
// │ (index) │  w   │          x          │ Values │
// ├────────┼──────┼───────────────────┼───────┤
// │    c    │      │                     │   33   │
// │    d    │      │                     │   44   │
// │    e    │ 1000 │ { y: 2000, z: 3000 }│        │
// └────────┴─────┴────────────────────┴───────┘
