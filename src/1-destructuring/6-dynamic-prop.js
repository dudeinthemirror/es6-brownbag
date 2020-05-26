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

const dynKey = 'd';
const { [dynKey]: dynamic } = inObj;
console.log('dynamic :', dynamic);
