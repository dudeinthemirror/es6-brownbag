// vowels
let inStr = 'supercalifragelistic';
const vowels = inStr.match(/[aeiou]/gi);

// -------------------
// match()
console.log('Vowels: ', vowels);
// output:
// Vowels:  [
//   'u', 'e', 'a',
//   'i', 'a', 'e',
//   'i', 'i'
// ]

console.log('Unique vowels: ', [...new Set(vowels)]);
// output:
// Unique vowels:  [ 'u', 'e', 'a', 'i' ]
