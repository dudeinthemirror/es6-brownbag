const obj = {
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

// console.log(obj.e.h.t);

console.log(obj.e?.h?.t);
