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

// extract prop c
// extract prop f. If it's undefinded, default it to -999
// extract prop t nested inside x nested inside e
// if it's undefined, default it to 'n/a'
const {
  c,
  f = -999,
  e: {
    x: { t = 'n/a' },
  },
} = inObj;
console.log('c:', c);
// output:
// c: 33

console.log('f:', f);
// output:
// f: -999

console.log('t:', t);
// output:
// t: 'n/a'

// Old way:
// const c = inObj.c;
// const f = inObj.f || -999;
// const t = inObj.e.x.t || 'n/a';
