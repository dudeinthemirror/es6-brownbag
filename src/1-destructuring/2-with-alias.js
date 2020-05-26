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

const { c: cee, d: dee } = inObj;
console.log('cee :', cee);
console.log('dee :', dee);
