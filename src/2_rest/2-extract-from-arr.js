const team = ['Carson', 'Barrow', 'Moseley', 'Bates', 'Parker', 'Kent'];

// extract first, second, all the rest
const [butler, underbutler, ...footmen] = team;

console.log('butler:', butler);
console.log('underbutler:', underbutler);
console.log('footmen:', footmen);

// extract all after first two
// const [, , ...rookies] = footmen;
// console.log('rookies :', rookies);
