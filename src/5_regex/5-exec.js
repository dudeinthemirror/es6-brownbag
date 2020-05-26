inStr = 'More about JavaScript at https://javascript.info';
let regexp = /javascript/gi;
let result;

while ((result = regexp.exec(inStr))) {
  console.log(`Found ${result[0]} at position ${result.index}`);
}
