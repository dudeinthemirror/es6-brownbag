const inObj = {
  c: 33,
  d: 44,
  e: {
    w: {
      arr: [1000, 2002],
      ts: 'asdaf',
    },
    x: {
      y: 2000,
      z: 3000,
    },
  },
};

// extract prop w which is nested inside prop e
// from inObj
const {
  e: { w },
} = inObj;
const { arr } = w;
const [elem1, elem2] = arr;

console.log('---- arr:', JSON.stringify(arr, null, '  '));
console.log('---- elem1:', elem1);
console.log('---- elem2:', elem2);

// extract prop y which is nested inside prop x
// which is nested inside e
// from inObj
const {
  e: {
    x: { y },
  },
} = inObj;
console.log('y:', y);
output: y: 2000;

// Old way:
// const w = inObj.e.w;
// const y = inObj.e.x.y;
