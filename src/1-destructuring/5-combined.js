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

const {
  c,
  f = 'f is n/a',
  e: {
    x: { t = 't is n/a' },
  },
} = inObj;
console.log(c);
console.log(f);
console.log(t);
