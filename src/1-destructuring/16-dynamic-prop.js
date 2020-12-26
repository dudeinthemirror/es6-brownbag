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

// generate the key dynamically
const dynKey = 'd';

// use generated key to destructure
const { [dynKey]: dynamic } = inObj; // --> after dynamic key is replaced, this becomes:  const { d: dynamic } = inObj;

console.log('dynamic:', dynamic);
// output
// dynamic: 44

// Old way:
// const dynamic = inObj[dynKey];
