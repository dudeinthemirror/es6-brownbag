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

// nested prop
// console.log(obj.e.h.t); // <-- cannot read prop 't' of undefined

// console.log(obj && obj.e && obj.e.h && obj.e.h.t);
// console.log(obj.e?.h?.t);

// console.log(obj?.['prop' + 'number']);

// array
// const arr = [1, 2, 3, 4];
// let arrItem = arr?.[8];
// console.log(arrItem);

// function
// const someFunc = (onSuccess, onError) => {
//   try {
//     if (asdf === 1) {
//       onSuccess();
//     }
//   } catch (error) {
//     onError?.(error.message);
//   }
// };

// someFunc(
//   () => console.log('SUCCESS'),
//   (msg) => console.log('ERROR: ', msg)
// );

// someFunc(() => console.log('SUCCESS'));

// caveat
// obj.e?.h?.t = 1; // <-- invalid left hand side in assignment
