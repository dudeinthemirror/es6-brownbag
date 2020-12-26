const obj = {
  c: 33,
  d: 44,
  e: {
    w: 1000,
    x: {
      y: 2000,
      z: 3000,
      w23: 4000,
    },
  },
};

// optional chaining: object props
// nested inexistent prop
// console.log(obj.e.h.t);
// output:
// 💥 crash: cannot read prop 't' of undefined

// optional chaining to avoid crash
// when t is undefined
let t = obj.e?.h?.t;
console.log('t:', t);
// output:
// t : undefined

// old way:
// let t = obj && obj.e && obj.e.h && obj.e.h.t;

// optional chaining with fallback value
// t = obj.e?.h?.t ?? 'n/a'; // ! NOTE: "??" is not supported here, b/c we are using node.js 12 to run these scripts, however you can use this in react native
// console.log('t:', t);
// output:
// t : n/a

// optional chaining: dynamically generated props
let w23 = obj?.e?.x?.['w' + '23'];
console.log('w23:', w23);
// output:
// w23 : 4000

// optional chaining: function call
const someFunc = (onSuccess, onError) => {
  try {
    const y = obj.e?.x?.y;
    onSuccess?.(y); // if the function exists, call it with y
  } catch (error) {
    onError?.(error.message);
  }
};

someFunc(
  (res) => console.log('res: ', res),
  (err) => console.log('ERROR: ', err)
);
// output:
// res: 2000

someFunc(); // if we don't pass onSuccess, onError callbacks, their calls inside someFunc will silently be ignored
// output:
// <nothing>

// ! caveat: you can't use optional chaining on
// ! the left side of expression
// obj.e?.h?.t = 1; //
// output:
// 💥 crash: invalid left hand side in assignment
