// create new array and populate it with
// numbers
Number.prototype[Symbol.iterator] = function* () {
  for (let i = 0; i <= this; i++) {
    yield i;
  }
};

console.log([...8]);
// output:
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ] magic !!!!

String.prototype[Symbol.iterator] = function* () {
  for (let i = this.charCodeAt(0); i <= this.charCodeAt(1); i++) {
    yield String.fromCodePoint(i);
  }
};

// create new array and populate it with letters
// from the Latin alphabet
console.log([...'ag']);
// output:
// [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ] magic !!!!

// ! 🚩 NOTE: Using constructs like the ones above, will add new props to the prototype of the base object (Number, String). This is an advanced technique that is generally not encouraged in production code, because of the potential side-effects (e.g. clash with other existing props or with props that might be introduced in the future)
