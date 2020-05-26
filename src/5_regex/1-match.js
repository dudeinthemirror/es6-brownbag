// vowels
let inStr = 'supercalifragelistic';
const vowels = inStr.match(/[aeiou]/gi);

// -------------------
// match()
console.log('Vowels: ', vowels);
console.log('Unique vowels: ', [...new Set(vowels)]);
