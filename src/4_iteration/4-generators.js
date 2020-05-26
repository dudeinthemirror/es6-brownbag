Number.prototype[Symbol.iterator] = function* () {
  for (let i = 0; i <= this; i++) {
    yield i;
  }
};

console.log([...8]);
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ] magic !!!!

String.prototype[Symbol.iterator] = function* () {
  for (let i = this.charCodeAt(0); i <= this.charCodeAt(1); i++) {
    yield String.fromCodePoint(i);
  }
};

console.log([...'ag']);
// [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ] magic !!!!
