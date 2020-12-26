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

// extract prop w which is nested inside prop e
// from inObj
const {
  e: { w },
} = inObj;
console.log('w:', w);
// output:
// w: 1000

// extract prop y which is nested inside prop x
// which is nested inside e
// from inObj
const {
  e: {
    x: { y },
  },
} = inObj;
console.log('y:', y);
// output:
// y: 2000

// Old way:
// const w = inObj.e.w;
// const y = inObj.e.x.y;
