// split a string by multiple delimiters (, <space>)
let inStr = '10,   11,12,   13, 14';
const outStr = inStr.split(/,\s*/);
console.log('outStr :', outStr);
// output:
// outStr : [ '10', '11', '12', '13', '14' ]
