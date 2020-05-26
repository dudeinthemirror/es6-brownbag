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
  e: { w },
} = inObj;
console.log(w);

const {
  e: {
    x: { y },
  },
} = inObj;
console.log(y);
